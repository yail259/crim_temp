import { writable } from "svelte/store";

const productsInStore = writable([
    {
        id: 1,
        name: "Tracksuit",
        image: "/1.jpg",
        price: 300
    },
    {
        id: 2,
        name: "Alien",
        image: "/2.jpg",
        price: 690
    },
    {
        id: 3,
        name: "Trouser",
        image: "/3.jpg",
        price: 220
    },
    {
        id: 4,
        name: "NoImage",
        image: "/4.jpg", 
        price: 4200
    },
]);

export default productsInStore;

