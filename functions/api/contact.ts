interface Env {
  RESEND_API_KEY: string;
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export const onRequestOptions: PagesFunction = () => {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  let body: { name?: string; email?: string; subject?: string; message?: string };

  try {
    body = await context.request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400, headers: CORS_HEADERS });
  }

  const { name, email, subject, message } = body;

  if (!name || !email || !subject || !message) {
    return Response.json(
      { error: 'Missing required fields: name, email, subject, message' },
      { status: 400, headers: CORS_HEADERS }
    );
  }

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
      <h2 style="border-bottom: 2px solid #111; padding-bottom: 8px;">
        Nuevo mensaje de contacto
      </h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; width: 100px;">Nombre</td>
          <td style="padding: 8px 0;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Email</td>
          <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Asunto</td>
          <td style="padding: 8px 0;">${subject}</td>
        </tr>
      </table>
      <h3 style="margin-top: 24px;">Mensaje</h3>
      <p style="white-space: pre-wrap; background: #f5f5f5; padding: 16px; border-radius: 4px;">
        ${message}
      </p>
    </div>
  `;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${context.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <noreply@santiorduno.com>',
        to: 'contacto@santiorduno.com',
        subject: `Nuevo mensaje de ${name}: ${subject}`,
        html,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error('Resend error:', error);
      return Response.json({ error: 'Failed to send email' }, { status: 500, headers: CORS_HEADERS });
    }

    return Response.json({ success: true }, { status: 200, headers: CORS_HEADERS });
  } catch (err) {
    console.error('Unexpected error:', err);
    return Response.json({ error: 'Internal server error' }, { status: 500, headers: CORS_HEADERS });
  }
};

export const onRequest: PagesFunction = () => {
  return Response.json({ error: 'Method not allowed' }, { status: 405, headers: CORS_HEADERS });
};
