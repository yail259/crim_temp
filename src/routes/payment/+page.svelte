<script>
    import { Elements, PaymentElement, LinkAuthenticationElement, Address } from 'svelte-stripe';
    import { goto } from '$app/navigation';
  
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
  
{#if error}
  <p class="error">{error.message} Please try again.</p>
{/if}


{#if data.stripe && data.clientSecret}
  <Elements
    stripe={data.stripe}
    clientSecret={data.clientSecret}
    bind:elements
  >
    <form on:submit|preventDefault={submit}>
      <LinkAuthenticationElement />
      <PaymentElement />
      <Address mode="billing" />

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

<style>
  *
  {
    padding: 10px;
    margin: 10px;
  }
</style>