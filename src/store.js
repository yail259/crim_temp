import { writable } from "svelte/store";

const productsInStore = writable([
    {
        id: 1,
        name: "bird wallet",
        image: "/1.jpg",
        price: 2000
    },
    // {
    //     id: 2,
    //     name: "Alien",
    //     image: "/2.jpg",
    //     price: 69000
    // },
    // {
    //     id: 3,
    //     name: "Trouser",
    //     image: "/3.jpg",
    //     price: 22000
    // },
    // {
    //     id: 4,
    //     name: "NoImage",
    //     image: "/4.jpg", 
    //     price: 420000
    // },
]);

export default productsInStore;

