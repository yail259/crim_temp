<script>
    import { goto } from '$app/navigation';
    import { db } from '$lib/firebase';
    import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

    let name = "";
    let email = "";

    async function saveEmail() {
        let docRef = await addDoc(collection(db, "emails"), {
            name: name,
            email: email,
            created: serverTimestamp(),
        });

        goto('/newsletter-success');
    }
</script>


<form on:submit|preventDefault={() => saveEmail()}>
    <h1>Newsletter</h1>
    Name
    <input type="text" bind:value={name}>
    Email
    <input type="email" bind:value={email}>
    <button>Submit</button>
</form>
