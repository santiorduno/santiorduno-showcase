import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);
const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only Post
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  try {
    const { error: dbError } = await supabase
      .from('contacts')
      .insert([{ name, email, message }]);

    if (dbError) throw dbError;

    // Resend  
    const { error: emailError } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Usa tu dominio verificado después
      to: 'contacto@santiorduno.com', // A donde te llegará la alerta
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <h1>Nuevo contacto del portafolio</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <blockquote style="background: #f9f9f9; padding: 10px;">${message}</blockquote>
      `
    });

    if (emailError) throw emailError;

    return res.status(200).json({ success: true, message: 'Mensaje enviado y guardado' });

  } catch (error: any) {
    console.error('Error:', error);
    return res.status(500).json({ error: error.message || 'Error interno del servidor' });
  }
}