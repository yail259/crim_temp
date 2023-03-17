<script>
    import { Elements, PaymentElement, LinkAuthenticationElement, Address } from 'svelte-stripe';
    import { goto } from '$app/navigation';
    import { loadStripe } from '@stripe/stripe-js';
    import { PUBLIC_STRIPE_KEY } from '$env/static/public'
	import { onMount } from 'svelte';
    import { doc, updateDoc } from "firebase/firestore";
    import { db } from '$lib/firebase';



    let stripe;
    onMount(async () => {
        stripe = await loadStripe(PUBLIC_STRIPE_KEY);
    })

    export let data;

    let error = null;
    let elements;
    let processing = false;

    let email = "";
    let phone = "";


    async function submit() {
        // avoid processing duplicates
        if (processing) return

        processing = true
        // confirm payment with stripe
        const result = await stripe.confirmPayment({
            elements,
            redirect: 'if_required'
        })

        // log results, for debugging
        console.log({ result })

        if (result.error) {
            // payment failed, notify user
            error = result.error;
            processing = false;
        } else {
            const docRef = doc(db, "orders", data.docRef);

            console.log(docRef);

            await updateDoc(docRef, {
                name: result.paymentIntent.shipping.name,
                phone: phone,
                address: result.paymentIntent.shipping.address,
                email: email,
                success: true,
            })

            goto('/payment-success');
        }
    }
    
</script>


<div class="ind_prod">
    {#if error}
        <p class="error">{error.message} Please try again.</p>
    {/if}


    {#if stripe && data.clientSecret}
        <Elements
        stripe={stripe}
        clientSecret={data.clientSecret}
        bind:elements
        >

            <form on:submit|preventDefault={submit}>
            <!-- <LinkAuthenticationElement /> -->
            <PaymentElement />
            <Address mode="shipping"/>
            <h2>email</h2>
            <input required type="email" alt="email" bind:value={email}/>

            <h2>phone</h2>
            <input required type="tel" alt="phone" bind:value={phone}/>

            <button disabled={processing}>
                {#if processing}
                Processing...
                {:else}
                Pay
                {/if}
            </button>
            </form>
        </Elements>
    {:else}
        Loading...
    {/if}
</div>


<style>

    :global(body)
    {
        background-color: #f9f6ee;
        color: #000000;
        font-family: 'Calibri';
        margin: 0px;
        padding: 0px;
    }

    *
    {   
        font-family: 'Calibri';
        color: #000000;
        background-color: #f9f6ee;
        text-decoration: none;
        margin: 0px;
        padding: 0px;
    }

    .ind_prod
    {
        border-bottom: 1px solid #000000;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
