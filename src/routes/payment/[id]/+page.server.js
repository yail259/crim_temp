import { get } from 'svelte/store';
import items from '/src/store'


export async function load({ params, fetch }) {
    let id = params.id;
    const response = await createPaymentIntent(id, fetch);

    const docRef = response.docRef;
    const clientSecret = response.clientSecret;

    // console.log(response)

    // console.log(clientSecret);

    return {
        docRef: docRef,
        clientSecret: clientSecret,
    }
}


async function createPaymentIntent(id, fetch) {
    const storeItems = get(items);
    let selectedItem;
    
    for (let product of storeItems) {
        if (parseInt(id) === product.id) {
            selectedItem = product;
        }
    }

    const response = await fetch('/payment-intent', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            price: selectedItem.price,
            name: selectedItem.name,
        })
    })

    return response.json();
}