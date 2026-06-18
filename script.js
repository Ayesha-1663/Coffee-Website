const button = document.querySelectorAll(".Coffees button");
button.forEach(btn=>{
    btn.addEventListener("click",()=>{
     alert("Order Placed Successfully");
    });
});