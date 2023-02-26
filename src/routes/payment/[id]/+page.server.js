import { get } from 'svelte/store';
import items from '/src/store'


export async function load({ params, fetch }) {
    let id = params.id;
    const clientSecretLoaded = await createPaymentIntent(id, fetch);

    console.log(params.id)

    console.log(clientSecretLoaded.clientSecret);

    return {
        clientSecret: clientSecretLoaded.clientSecret,
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
            cost: selectedItem.price,
        })
    })

    const clientSecret = await response.json();

    return clientSecret;
}