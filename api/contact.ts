import { config } from 'dotenv';
config({ path: '.env.local' });
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 1. Logs de depuración (verás esto en tu terminal)
  console.log("📩 Intento de envío recibido");
  console.log("🔑 Chequeando variables:", {
    url: process.env.SUPABASE_URL ? "OK" : "FALTA",
    key: process.env.SUPABASE_ANON_KEY ? "OK" : "FALTA",
    resend: process.env.RESEND_API_KEY ? "OK" : "FALTA"
  });

  // Solo permitir POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  try {
    // 2. Inicializamos los clientes AQUÍ DENTRO para capturar errores de config
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_ANON_KEY!
    );
    const resend = new Resend(process.env.RESEND_API_KEY!);

    // 3. Guardar en Supabase
    const { error: dbError } = await supabase
      .from('contacts')
      .insert([{ name, email, subject, message }]);

    if (dbError) {
        console.error("Error Supabase:", dbError);
        throw new Error(`Error BD: ${dbError.message}`);
    }

    // 4. Enviar correo
    const { error: emailError } = await resend.emails.send({
      from: 'Portfolio Contact <noreply@santiorduno.com>',
      to: 'contacto@santiorduno.com', // Tu correo real
      subject: `Nuevo mensaje de ${name}: ${subject}`,
      html: `
        <h1>Nuevo contacto del portafolio</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <blockquote style="background: #f9f9f9; padding: 10px;">${message}</blockquote>
      `
    });

    if (emailError) {
        console.error("Error Resend:", emailError);
        throw new Error(`Error Email: ${emailError.message}`);
    }

    return res.status(200).json({ success: true, message: 'Mensaje enviado y guardado' });

  } catch (error: any) {
    console.error('❌ Error General:', error);
    return res.status(500).json({ error: error.message || 'Error interno del servidor' });
  }
}