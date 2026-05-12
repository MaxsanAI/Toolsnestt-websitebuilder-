export const GET: APIRoute = async ({ url, cookies }) => {
  const token = url.searchParams.get('token');

  // 1. Proveri token u bazi
  // const user = await db.prepare("SELECT * FROM users WHERE magic_link_token = ?").bind(token).first();

  // 2. Ako je validan i nije istekao, uloguj ga (Postavi Session Cookie)
  cookies.set('session', 'neki-secure-token', { path: '/' });

  // 3. Obriši token da ne može dvaput da se koristi
  // await db.prepare("UPDATE users SET magic_link_token = NULL WHERE id = ?").bind(user.id).run();

  return Response.redirect(new URL('/dashboard', url.origin));
};
