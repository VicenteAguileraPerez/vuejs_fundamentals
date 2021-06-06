//instancia de vue
const app = new Vue({
    el:"#app",
    data:{
        mensaje:null,
        mensaje2:null,
        mensaje3:null,
        mensajeOnce:"Escrito una vez",
        mensajeCloak:"CLOAK MESSAGE",
        nombre:"Vicente Aguilera Pérez",
        nombre2:"Vicente Aguilera Pérez"
    },
    methods:
    {
        update:function()
        {
           this.mensaje="Esto es un mensaje";
        },
        update2:function()
        {
           this.mensaje2="<p>Esto es un parrafo de html </p><br><a href='#'>Ancle</a>";
        },
        update3:function()
        {
            this.mensajeCloak=(this.mensajeCloak==="Esto es de v-pre")?"Hola":"Esto es de v-pre";
        }
    }
});

function loadApp () {
	new Vue({el: '#appCloak', data: {name: 'Vicente'}})
}