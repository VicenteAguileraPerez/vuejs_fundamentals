
const app = new Vue({
    el:"#app",
    data:
    {
        items:[]
    },
    methods:
    {
        addItem: function()
        {
            var str;
            do{
                str= prompt("Introduce una nueva cadena a el arraglo");
                if(str!==null && str!=='')
                {
                    this.items.push(str);
                }
            }while(str===null || str==='');
            console.log(str);
            
        }
    }
    
});