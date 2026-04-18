// app/api/webhook/route.ts
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-03-25.dahlia', // Current stable version for 2026
});

export async function POST(req: Request) {
  const body = await req.text(); // Get raw text for signature validation
  const headerList = await headers();
  const signature = headerList.get('stripe-signature') as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error(`❌ Webhook Error: ${err.message}`);
    return NextResponse.json({ error: 'Invalid Signature' }, { status: 400 });
  }

  // Handle successful payments
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    
    // CUSTOM LOGIC:
    // This is where future projects or update a database.
    console.log(`✅ Payment Success for Session: ${session.id}`);
    console.log(`📧 Customer Email: ${session.customer_details?.email}`);
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
