export const POST: APIRoute = async ({ request }) => {
  const { email } = await request.json();
  const token = crypto.randomUUID();
  const expires = new Date(Date.now() + 3600000); // 1 sat važi

  // 1. Sačuvaj token u D1 bazu
  // await db.prepare("UPDATE users SET magic_link_token = ?, token_expires = ? WHERE email = ?")
  //   .bind(token, expires.toISOString(), email).run();

  // 2. Pošalji email korisniku
  const magicLink = `https://websitebuilder.toolsnestt.com/api/auth/verify?token=${token}`;
  
  // Ovde ide tvoj mailer (Resend/SendGrid)
  console.log(`Poslat Magic Link na ${email}: ${magicLink}`);

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
