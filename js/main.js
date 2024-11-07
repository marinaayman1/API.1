fetch('https://dummyjson.com/products')
.then(function(ahmed){
    return ahmed.json()
})
.then( function(item){
    var mohamed=item.products;
    var myText="";  
    for(var i=0;i<mohamed.length;i++){
    var cartoona =`<div class="col-md-4 text-center mb-5 ">
          <img src="${mohamed[i].images[0]}"  style="height:350px" class="img-fluid">
               <h4>${mohamed[i].title}</h4>
             <h6>${mohamed[i].price}$</h6>
                </div>
  
                ` ;
                myText = myText + cartoona;

   }
   document.querySelector(".test").innerHTML = myText;

   })