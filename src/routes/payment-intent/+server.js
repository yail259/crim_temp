import Stripe from 'stripe'
import { SECRET_STRIPE_KEY } from '$env/static/private'
import { json } from '@sveltejs/kit'

// initialize Stripe
const stripe = new Stripe(SECRET_STRIPE_KEY);

export async function POST({ request }) {
    const requestObj = await request.json();

    const paymentIntent = await stripe.paymentIntents.create({
        amount: requestObj.cost,
        currency: 'usd',
        automatic_payment_methods: {
            enabled: true
        }
    })
  
    return json({
      clientSecret: paymentIntent.client_secret
    })
}