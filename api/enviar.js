const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // CORS configuration for local testing (optional but recommended)
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS,POST')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // 1. Solo permitir método POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido. Solo se acepta POST.' });
  }

  try {
    // 2. Extraer los datos enviados desde el frontend (app.js / index.html)
    const { nombre, email, telefono, servicio, mensaje } = req.body;

    // 3. Validación básica del servidor
    if (!nombre || !email || !servicio || !mensaje) {
      return res.status(400).json({ error: 'Faltan campos obligatorios en el formulario.' });
    }

    // 4. Estructurar el cuerpo del correo en HTML
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #0a0a0a; color: #fff; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">Nueva Reserva de TupunTravels 🚐🍷</h1>
        </div>
        <div style="padding: 30px;">
          <p style="font-size: 16px;">Hola equipo,</p>
          <p style="font-size: 16px;">Han recibido una nueva solicitud de reserva desde la Landing Page. Aquí están los detalles del cliente:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eaeaea; font-weight: bold; width: 35%;">Nombre Completo:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eaeaea;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eaeaea; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eaeaea;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eaeaea; font-weight: bold;">Teléfono / WPP:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eaeaea;">${telefono || 'No proporcionado'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eaeaea; font-weight: bold;">Servicio de interés:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eaeaea; color: #7B2D3B; font-weight: bold;">${servicio}</td>
            </tr>
          </table>

          <div style="margin-top: 25px; background-color: #f9f9f9; padding: 15px; border-left: 4px solid #7B2D3B; border-radius: 4px;">
            <p style="margin: 0; font-weight: bold; font-size: 14px; color: #555;">Mensaje del cliente:</p>
            <p style="margin: 10px 0 0 0; font-size: 15px; line-height: 1.5; white-space: pre-wrap;">${mensaje}</p>
          </div>
        </div>
        <div style="background-color: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #666;">
          Este correo fue generado y enviado automáticamente mediante Vercel y Resend.
        </div>
      </div>
    `;

    // 5. Enviar el correo usando Resend
    const { data, error } = await resend.emails.send({
      from: 'TupunTravels Reservas <onboarding@resend.dev>', // Usar correo de prueba de resend
      to: ['giulianolapianam@gmail.com'], // Reemplazar con el correo en producción luego
      reply_to: email, // Para poder responder directamente al cliente desde la bandeja de entrada
      subject: 'Nueva reserva de TupunTravels',
      html: htmlBody,
    });

    // 6. Manejo de error de Resend
    if (error) {
      console.error('Error de Resend al intentar enviar correo:', error);
      return res.status(500).json({ error: 'Hubo un error del servidor al intentar contactar con el proveedor de correo.' });
    }

    // 7. Respuesta exitosa
    return res.status(200).json({ success: true, message: 'Correo enviado correctamente', id: data?.id });

  } catch (error) {
    console.error('Error fatal del Servidor (Serverless Function):', error);
    return res.status(500).json({ error: 'Error inesperado del servidor.' });
  }
}
