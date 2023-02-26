export async function load({ params}) {
    let id = params.generic;

    if (parseInt(id) === 16){
        id = Math.floor(Math.random() * 3) + 1;
    }

    return {
        id,
    }
}

