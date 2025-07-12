let maleimg=document.getElementById("maleimg");
let femaleimg=document.getElementById("femaleimg");
let childrenimg=document.getElementById("childrenimg");
let categoriesContainer=document.getElementById("categoriesContainer");
categoriesContainer.classList.add("categoriesContainer");
let cartimage=document.getElementById("cartimage");

let cartcontainer=document.createElement("div");
let cart=[

]
let mencategories=[
    {image:"https://th.bing.com/th/id/OIP.XuEvVa86vqkj0zVDadVIsAAAAA?w=186&h=279&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",brand:"Allen Solly",price:"300"},
   
     {image:"https://th.bing.com/th/id/OIP.nIZVkHGTGrhJi98ZA4GR7gHaJo?w=186&h=242&c=7&r=0&o=5&dpr=1.3&pid=1.7",brand:"USPA",price:"1300"},
    {image:"https://th.bing.com/th/id/OIP.8Mi-0sQprVA3qE7-0ZsHswAAAA?w=186&h=239&c=7&r=0&o=5&dpr=1.3&pid=1.7",brand:"USPA",price:"400"},
{image:"https://th.bing.com/th/id/OIP.8Mi-0sQprVA3qE7-0ZsHswAAAA?w=186&h=239&c=7&r=0&o=5&dpr=1.3&pid=1.7",brand:"USPA"},
    {image:"https://th.bing.com/th/id/OIP.8Mi-0sQprVA3qE7-0ZsHswAAAA?w=186&h=239&c=7&r=0&o=5&dpr=1.3&pid=1.7",brand:"USPA",price:"340"},

    {image:"https://th.bing.com/th/id/OIP.8Mi-0sQprVA3qE7-0ZsHswAAAA?w=186&h=239&c=7&r=0&o=5&dpr=1.3&pid=1.7",brand:"USPA",price:"689"},

    {image:"https://th.bing.com/th/id/OIP.8Mi-0sQprVA3qE7-0ZsHswAAAA?w=186&h=239&c=7&r=0&o=5&dpr=1.3&pid=1.7",brand:"USPA",price:"760"},

    {image:"https://th.bing.com/th/id/OIP.8Mi-0sQprVA3qE7-0ZsHswAAAA?w=186&h=239&c=7&r=0&o=5&dpr=1.3&pid=1.7",brand:"USPA",price:"990"},

    ]
let womencategories=[
    {image:"https://th.bing.com/th/id/OIP.8pTPcltPJHnZf4ZNTnjtpAHaNI?w=186&h=330&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",brand:"levis",price:"790"},
    {image:"https://th.bing.com/th/id/OIP.sv1M8b7OAcK-6ojGPxddYwHaJ4?w=138&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",brand:"adidas",price:"1990"},
    {image:"https://th.bing.com/th/id/OIP.kjvBZqXZyvq-p3cyGq7osAHaJ4?w=186&h=248&c=7&r=0&o=5&dpr=1.3&pid=1.7",brand:"allensolly",price:"990"},
    {image:"data:image/webp;base64,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",brand:"roadster",price:"990"},
     ]
maleimg.onclick=function(){
    categoriesContainer.textContent="";
    for (category of mencategories){
let categorydiv=document.createElement("div");
categorydiv.classList.add("categorydiv");
categoriesContainer.appendChild(categorydiv);
let categoryimage=document.createElement("img");
    categoryimage.src=category.image;
    categoryimage.classList.add("categoryimage")
    categorydiv.appendChild(categoryimage);
    categoryimage.onclick=function(){
       
        categoriesContainer.textContent="";
        let bigimagediv=document.createElement("div");
        let bigimage=document.createElement("img");
        bigimage.src=categoryimage.src;
        bigimage.classList.add("categoryimage")
        bigimagediv.appendChild(bigimage);
        categoriesContainer.appendChild(bigimagediv);

    }
    
    let categoryname=document.createElement("p");
    categoryname.textContent=category.brand;
    categorydiv.appendChild(categoryname)

    }

  }  
femaleimg.onclick=function(){
    categoriesContainer.textContent="";
function categoriesFunc (){
    for (category of womencategories){
let categorydiv=document.createElement("div");
categoriesContainer.classList.remove("cartdiv");
categorydiv.classList.add("categorydiv");
categoriesContainer.appendChild(categorydiv);
let categoryimage=document.createElement("img");
    categoryimage.src=category.image;
    categoryimage.onclick=function(){
        categoriesContainer.textContent="";
        let bigimagediv=document.createElement("div");
        let bigimage=document.createElement("img");
        bigimage.src=categoryimage.src;
        bigimagediv.appendChild(bigimage);
        let cost=document.createElement("p");
        cost.textContent=category.price+" Rs";
         bigimagediv.appendChild(cost);
        categoriesContainer.appendChild(bigimagediv);
        let addtocartbtn=document.createElement("button");
        addtocartbtn.textContent="Add to Cart";
        addtocartbtn.classList.add("addtocartbtn");

       bigimagediv.appendChild(addtocartbtn);
       addtocartbtn.onclick=function(){
        alert("item added to cart")
        categoriesContainer.textContent=""
        categoriesFunc();
        cart.push({cartimage:categoryimage.src,price:cost.textContent})
        console.log(cart)
        if (cart.length>0){
    let headdiv=document.getElementById("headdiv");
    let lencart =document.createElement("p");
    lencart.textContent=cart.length;
    headdiv.appendChild(lencart);
    console.log("paraimagge")

}
console.log(cart.length)
       }
        

    }
    categoryimage.classList.add("categoryimage")
    categorydiv.appendChild(categoryimage);
    let categoryname=document.createElement("p");
    categoryname.textContent=category.brand;
    categorydiv.appendChild(categoryname)

    }

  } 
categoriesFunc();

} 
let  amounts=[];
cartimage.onclick=function(){

    categoriesContainer.textContent=""
    for(item of cart){
        let totalamountsBill;
        let cartitemdiv=document.createElement("div");
        cartitemdiv.classList.add("cartitemdiv");
        let cartitemimage=document.createElement("img");
        cartitemimage.classList.add("categoryimage");
        cartitemimage.src=item.cartimage;
        cartitemdiv.appendChild(cartitemimage);
        categoriesContainer.appendChild(cartitemdiv);
        categoriesContainer.classList.add("cartdiv");
        let itemcost=document.createElement("p");
        itemcost.textContent=item.price;
        cartitemdiv.appendChild(itemcost);
         let minusbtn=document.createElement("button");
        minusbtn.textContent="-";
        minusbtn.classList.add("plusminusbtn")
         cartitemdiv.appendChild(minusbtn);
       
         let countvalue=document.createElement("p");
        countvalue.textContent="1";
        cartitemdiv.appendChild(countvalue);
          let plusbtn=document.createElement("button");
        plusbtn.textContent="+";

        cartitemdiv.appendChild(plusbtn);
        plusbtn.classList.add("plusminusbtn")
         let totalamount=document.createElement("p");
         totalamount.id="itemstotalbill";
        
        
         plusbtn.onclick=function(){
            let count=parseInt(countvalue.textContent);
           count=count+1;
            countvalue.textContent=count;
             let updatedbill=parseInt(countvalue.textContent)*parseInt(itemcost.textContent)
            totalamount.textContent=updatedbill," Rs";
           totalamount.textContent=parseInt(countvalue.textContent)*parseInt(itemcost.textContent)
        cartitemdiv.appendChild(totalamount);
           
         };
       
         minusbtn.onclick=function(){
            
            let count=parseInt(countvalue.textContent);
           count=count-1;
            countvalue.textContent=count;
             let updatedbill=parseInt(countvalue.textContent)*parseInt(itemcost.textContent)
            totalamount.textContent=updatedbill," Rs";
           totalamount.textContent=parseInt(countvalue.textContent)*parseInt(itemcost.textContent)
         }
       


 


    }

   let placeorderbtn=document.createElement("button");
   placeorderbtn.textContent="place order";
   categoriesContainer.appendChild(placeorderbtn);
   placeorderbtn.classList.add("placeorderbtn")
   placeorderbtn.onclick=function(){
    console.log(totalamount.textContent)
   alert("your order is placed")
   }
}
