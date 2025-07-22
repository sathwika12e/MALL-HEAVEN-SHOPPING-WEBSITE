let maleimg=document.getElementById("maleimg");
let femaleimg=document.getElementById("femaleimg");
let childrenimg=document.getElementById("childrenimg");
let categoriesContainer=document.getElementById("categoriesContainer");
categoriesContainer.classList.add("categoriesContainer");
let cartimage=document.getElementById("cartimage");

let cartcontainer=document.createElement("div");
let headdiv=document.getElementById("headdiv");
let lencart =document.createElement("p");
headdiv.appendChild(lencart);
        
        
let cart=[ ]
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
    {image:"https://th.bing.com/th/id/OIP.kjvBZqXZyvq-p3cyGq7osAHaJ4?w=186&h=248&c=7&r=0&o=5&dpr=1.3&pid=1.7",brand:"allensolly",price:"952"},
   ]

let childrencategories=[
    {image:"",brand:"levis",price:"790"},
    {image:"https://th.bing.com/th/id/OIP.sv1M8b7OAcK-6ojGPxddYwHaJ4?w=138&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",brand:"adidas",price:"1990"},
    {image:"https://th.bing.com/th/id/OIP.kjvBZqXZyvq-p3cyGq7osAHaJ4?w=186&h=248&c=7&r=0&o=5&dpr=1.3&pid=1.7",brand:"allensolly",price:"952"},
   ]
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
    categoryimage.classList.add("categoryimage")
    categorydiv.appendChild(categoryimage);
    let categoryname=document.createElement("p");
    categoryname.textContent=category.brand;
    categorydiv.appendChild(categoryname)
     let categoryprice=document.createElement("p");
    categoryprice.textContent=category.price;
    categorydiv.appendChild(categoryprice)
    categoryimage.onclick=function(){
        categoriesContainer.textContent="";
        let bigimagediv=document.createElement("div");
        let bigimage=document.createElement("img");
        bigimage.src=categoryimage.src;
        bigimagediv.appendChild(bigimage);
        let cost=document.createElement("p");
        cost.textContent=categoryprice.textContent;
        console.log(cost.textContent)
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
       
console.log(cart.length)
       }
        

    }
    

    }

  } 
categoriesFunc();

} 


maleimg.onclick=function(){
    categoriesContainer.textContent="";
function categoriesFunc (){
   
    for (category of mencategories){
       
let categorydiv=document.createElement("div");
categoriesContainer.classList.remove("cartdiv");
categorydiv.classList.add("categorydiv");
categoriesContainer.appendChild(categorydiv);
let categoryimage=document.createElement("img");
    categoryimage.src=category.image;
    categoryimage.classList.add("categoryimage")
    categorydiv.appendChild(categoryimage);
    let categoryname=document.createElement("p");
    categoryname.textContent=category.brand;
    categorydiv.appendChild(categoryname)
     let categoryprice=document.createElement("p");
    categoryprice.textContent=category.price;
    categorydiv.appendChild(categoryprice)
    categoryimage.onclick=function(){
        categoriesContainer.textContent="";
        let bigimagediv=document.createElement("div");
        let bigimage=document.createElement("img");
        bigimage.src=categoryimage.src;
        bigimagediv.appendChild(bigimage);
        let cost=document.createElement("p");
        cost.textContent=categoryprice.textContent;
        console.log(cost.textContent)
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
       
    lencart.textContent=cart.length;
   

}
console.log(cart.length)
       
        

    }
    

    }

  } 
categoriesFunc();

} 

childrenimg.onclick=function(){
    categoriesContainer.textContent="";
function categoriesFunc (){
   
    for (category of childrencategories){
       
let categorydiv=document.createElement("div");
categoriesContainer.classList.remove("cartdiv");
categorydiv.classList.add("categorydiv");
categoriesContainer.appendChild(categorydiv);
let categoryimage=document.createElement("img");
    categoryimage.src=category.image;
    categoryimage.classList.add("categoryimage")
    categorydiv.appendChild(categoryimage);
    let categoryname=document.createElement("p");
    categoryname.textContent=category.brand;
    categorydiv.appendChild(categoryname)
     let categoryprice=document.createElement("p");
    categoryprice.textContent=category.price;
    categorydiv.appendChild(categoryprice)
    categoryimage.onclick=function(){
        categoriesContainer.textContent="";
        let bigimagediv=document.createElement("div");
        let bigimage=document.createElement("img");
        bigimage.src=categoryimage.src;
        bigimagediv.appendChild(bigimage);
        let cost=document.createElement("p");
        cost.textContent=categoryprice.textContent;
        console.log(cost.textContent)
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
       if (cart.length>0){
            lencart.textContent=cart.length
            
    
    }
        
  
    console.log("paraimagge")

}
        
console.log(cart.length)
       
        

    }
    

    }

  } 
categoriesFunc();

} 


    

let  amounts=[];
cartimage.onclick=function(){

let count;
    categoriesContainer.textContent=""
    for(item of cart){
       count=0

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
            count=parseInt(countvalue.textContent);
           count=count+1;
            countvalue.textContent=count;
             let updatedbill=parseInt(itemcost.textContent)+parseInt(itemcost.textContent)
            
            totalamount.textContent=updatedbill," Rs";
           totalamount.textContent=parseInt(countvalue.textContent)*parseInt(itemcost.textContent)
        cartitemdiv.appendChild(totalamount);
           
         };
       
         minusbtn.onclick=function(){
             count=parseInt(countvalue.textContent);
            
           count=count-1;
            countvalue.textContent=count;
             let updatedbill=parseInt(itemcost.textContent)-parseInt(itemcost.textContent)
            totalamount.textContent=updatedbill," Rs";
           totalamount.textContent=parseInt(countvalue.textContent)*parseInt(itemcost.textContent)
         }
       

  
   }
   console.log(count,"count is")

 let placeorderbtn=document.createElement("button");
   placeorderbtn.textContent="place order";
   categoriesContainer.appendChild(placeorderbtn);
   placeorderbtn.classList.add("placeorderbtn")
   let totalcartbill=0;
   placeorderbtn.onclick=function(){
         for (item of cart){
            console.log(item.price)
               totalcartbill=totalcartbill+(count*parseInt(item.price))
         }
console.log(totalcartbill)
let totalbillpara=document.createElement("p");
totalbillpara.textContent="total cost "+"      "+totalcartbill;
categoriesContainer.appendChild(totalbillpara);

    }
 

}
