import { PUBLIC_STRIPE_KEY } from '$env/static/public';
import { loadStripe } from '@stripe/stripe-js';


export async function load({ fetch }) {

    const stripeLoaded = await loadStripe(PUBLIC_STRIPE_KEY);

    const clientSecretLoaded = await createPaymentIntent({ fetch });

    return {
        stripe: stripeLoaded,
        clientSecret: clientSecretLoaded.clientSecret,
    }
}

async function createPaymentIntent({ fetch }) {
    const response = await fetch('/payment-intent', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        // body: JSON.stringify({})
    })

    const clientSecret = await response.json();

    return clientSecret;
}
