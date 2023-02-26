<script>

import productsInStore from './../../../store.js';

export let data;

let sproduct;

console.log(data.id);

for (let product of $productsInStore) {

    if (parseInt(data.id) == product.id) {
        sproduct = product;
    }
}

console.log(sproduct)

</script>

<div class = "ind_prod">

    
    <div class = "disp_container">
        <div class = "disp" style = "background-image: url({sproduct.image})">
        </div>
    </div>
    <div class = "desc_container">
        <h1>{sproduct.name}</h1>
        <p1>Product description</p1><br>
        <p1> Price : {sproduct.price}</p1>
    </div>
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

.disp
{
    height: 950px;
    width: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    margin: 0;
    padding: 0;
    background-color: #f9f6ee; /*Change this colour to change the background colour of the shirts*/
}

.disp_container
{
    padding: 0px;
    width: 100%;
    border-right: 1px solid #000000;
}

.desc_container
{
    width: 100%;
    text-align: center;
}

</style>