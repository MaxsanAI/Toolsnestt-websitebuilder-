import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const signature = request.headers.get('paddle-signature');

  // 1. Verifikacija (Paddle traži tajni ključ da potvrdi da je on poslao)
  // Ovde ide tvoja logika za proveru potpisa

  const eventType = body.event_type;
  const userId = body.data.custom_data?.user_id;

  if (!userId) {
    return new Response('Missing user_id', { status: 400 });
  }

  // 2. Obrada evenata
  switch (eventType) {
    case 'subscription.created':
    case 'subscription.updated':
      const status = body.data.status; // 'active', 'trialing', itd.
      // OVDE: Upis u tvoju bazu (D1/Supabase)
      // await db.updateUserSubscription(userId, status);
      break;

    case 'subscription.cancelled':
      // await db.updateUserSubscription(userId, 'cancelled');
      break;
  }

  return new Response(JSON.stringify({ received: true }), { status: 200 });
};
