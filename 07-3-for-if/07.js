const app = new Vue({
    el:"#app",
    data:
    {
        fruits:[],
        mensaje:"",
        quantity:null,
        fruit:null,
        color:null
    },
    methods:
    {
        addFruit: function (quantity,color,fruit)
        {
            console.log(quantity);
            if(quantity===null && fruit===null && color===null  )
            {
                this.mensaje="All inputs are null";
            }
            else if(quantity===null && fruit===null && color!==null  )
            {
                this.mensaje="Quantity and Fruit are null";
            }
            else if(quantity===null && fruit!==null && color===null  )
            {
                this.mensaje="Quantity and Color are null";
            }
            else if(quantity!==null && fruit===null && color===null  )
            {
                this.mensaje="Fruit and Color are null";
            }
            else if(quantity===null && fruit!==null && color!==null  )
            {
                this.mensaje="Quantity is null";
            }
            else if(quantity!==null && fruit===null && color!==null  )
            {
                this.mensaje="Fruit is null";
            }
            else if(quantity!==null && fruit!==null && color===null  )
            {
                this.mensaje="Color is null";
            }
            else
            {
                this.mensaje="OK";
                this.fruits.push({quantity:quantity,color:color,fruit:fruit});
                console.log(this.fruits);
                this.quantity=null;
                this.color=null;
                this.fruit=null;

            }
           
            
        }
    }

});