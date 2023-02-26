<script>
    import { Elements, PaymentElement, LinkAuthenticationElement, Address } from 'svelte-stripe';
    import { goto } from '$app/navigation';
    import { loadStripe } from '@stripe/stripe-js';
    import { PUBLIC_STRIPE_KEY } from '$env/static/public'

    const stripe = loadStripe(PUBLIC_STRIPE_KEY);

    export let data;

    let error = null;
    let elements;
    let processing = false;

    async function submit() {
        // avoid processing duplicates
        if (processing) return

        processing = true
        // confirm payment with stripe
        const result = await data.stripe.confirmPayment({
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
            <!-- <Address mode="billing" /> -->

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
    .ind_prod
    {
        border-bottom: 1px solid #000000;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
