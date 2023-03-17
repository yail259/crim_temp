import Stripe from 'stripe'
import { SECRET_STRIPE_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';
import { db } from '$lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// initialize Stripe
const stripe = new Stripe(SECRET_STRIPE_KEY);

async function loginOwner() {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, PUBLIC_OWNER_KEY, SECRET_OWNER_KEY);
    } catch (e) {
        console.log(e);
    }    
}

export async function POST({ request }) {
    const requestObj = await request.json();

    const paymentIntent = await stripe.paymentIntents.create({
        amount: requestObj.price,
        currency: 'usd',
        automatic_payment_methods: {
            enabled: true
        }
    })

    let docRef = await addDoc(collection(db, "orders"), {
        itemName: requestObj.name,
        price: requestObj.price,
        success: false,
        created: serverTimestamp(),
    })

    console.log(docRef);
  
    return json({
        docRef: docRef.id,
        clientSecret: paymentIntent.client_secret
    })
}