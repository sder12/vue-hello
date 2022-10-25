//  vue-hello
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const { createApp } = Vue;

createApp({
    data: function () {
        return {
            userName: "Mario Rossi",
            titleUnsplash: "Explore Unsplash photos",
            classImg: "img-unsplash",
            srcImg: "https://source.unsplash.com/random/900×700/?fruit",
            altText: "Fruits img published by unsplash",
            phName: "",
            phSurname: "",
            displayInput:"",
            displayOutput: "hidden",
        }
    },
    methods: {
        print : function printPh(){
            this.displayInput = "hidden";
            this.displayOutput = "";
        }
    }
}).mount("#app")