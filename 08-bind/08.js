//instanciar vue

const app = new Vue({

    //todo lo que está en el contenido  app se gestiona con vue
    el: '#app',
    data: 
    {
        titulo: "Vicente Aguilera Bienvenido a Vue",
        fruta: ["Apple","Orange","Banana"],
        dataJson:[
            {nombre:"Pear",         color:"Green",     quantity:10},
            {nombre:"Apple",        color:"Red",       quantity:1},
            {nombre:"Banana",       color:"Yellow",    quantity:0},
            {nombre:"Grape",        color:"Purble",    quantity:0},
            {nombre:"Orange",       color:"Orange",    quantity:1},
            {nombre:"Strawberries", color:"Pink",      quantity:0},
        ],
        message: 'You loaded this page on ' + new Date().toLocaleString(),
        image: "https://lenguajejs.com/javascript/logo.svg",
    }

})