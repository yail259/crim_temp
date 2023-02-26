<script>

import { construct_svelte_component_dev } from 'svelte/internal';


import productsInStore from '../../store.js';

let products

productsInStore.subscribe((data) => 
{
    products = data
})

let prodlen = products.length;

if(prodlen < 16){
    for (let i = 0; i < 16 - prodlen; i++){
        let pushObj = {
            id: 16,
            name: "Qn marks",
            image: "/mystery4.png",
            price: 777
        }
        products.push(pushObj);
    }
}

products.sort(() => Math.random() - 0.4567);

</script>

<nav class = "navbar_product">
    <ul class = "product_page_links">
        <li><a href='/'>category one</a></li>
        <li><a href='/'>category two</a></li>
        <li><a href='/'>category three</a></li>
        <li><a href='/'>category four</a></li>
        <li><a href='/'>category five</a></li>
        <li><a href='/'>category six</a></li>
    </ul>
</nav>

<div class = "product_page_title">
    <h1>Product Name crim_ Maybe 16 boxes in grid on each page for now with some blank 4 x 4</h1>
</div>

<div class = "results_no">
    <p1>16 results</p1>
</div>

<div class = "product_list">
    {#each products as product}
    <div class = "disp_container">
        <a href = '/product/{product.id}'>
            <div class = "disp" style = "background-image: url({product.image})">
        </div></a>
    </div>
    {/each}
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

h1
{
    padding: 100px;
    font-size: 30px;
    border-bottom: 1px solid #000000;
}

p1
{
    padding: 7px;
    font-size: 17px;
}

.results_no
{
    display: flex;
    flex-direction: row; /*puts the three items (h1, page_links and right_links in horizontal row flexbox.*/
    flex-wrap: nowrap; /*keep all items on the same line*/
    justify-content: space-between; /*spaces the content out with the outermost starting on both ends and even space in between*/
    align-items: center;
    /*padding: 10px 10px;*/
    border-bottom : 1px solid #000000;
}

.product_page_links
{
    font-size: 17px;
    text-decoration: none;
    padding: 0px 20px;
}

.navbar_product
{
    display: flex;
    flex-direction: row; /*puts the three items (h1, page_links and right_links in horizontal row flexbox.*/
    flex-wrap: nowrap; /*keep all items on the same line*/
    justify-content: space-between; /*spaces the content out with the outermost starting on both ends and even space in between*/
    align-items: center;
    /*padding: 10px 10px;*/
    border-bottom : 1px solid #000000;
}

.product_page_links li
{
    display: inline-block;
    padding: 8px 10px;
}

.product_page_links li a:hover
{
    color: #000000;
    border: 1px solid;
    border-radius: 5px;
    padding: 2px 10px;
    margin: -3px -11px;
}

.product_page_title
{
    text-align: center;
}

.disp
{
    height: 475px;
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
    justify-self: center;
    align-self: center;
    border-right: 1px solid #000000;
    border-bottom: 1px solid #000000;
}

.product_list
{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    column-gap: 1px;
    row-gap: 1px;
    justify-content: space-between;
    border-bottom: 1px solid #000000;
    width: 100%;
    justify-items: stretch;
    align-items: stretch;
}

.product_list .disp_container:nth-child(4n)
{
    border-right: none;
}

.product_list .disp_container:nth-child(16)
{
    border-bottom: none;
}
.product_list .disp_container:nth-child(15)
{
    border-bottom: none;
}
.product_list .disp_container:nth-child(14)
{
    border-bottom: none;
}
.product_list .disp_container:nth-child(13)
{
    border-bottom: none;
}

</style>
