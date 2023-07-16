let menu = document.querySelector('#menu-bars')
let navbar = document.querySelector('.nav-link')
const url = `https://fakestoreapi.com/products`;
const cat_url = `https://fakestoreapi.com/products/category/`;
menu.onclick = ()=>{
    navbar.classList.toggle('active');
    menu.classList.toggle('fa-times')
}
window.onscroll=()=>{
    navbar.classList.remove('active');
    menu.classList.remove('fa-times')
}
const product_container = document.getElementById("products");
const select = document.getElementById("slect")

async function fetchdata(url) {  

   let data = await fetch(url)
   let res = await data.json()

   for (let i = 0; i < res.length; i++) {
    //    console.log(res)
    product_container.innerHTML+=` <div class="items" id="${res[i].title}">
    <div class="img-container">
    <img src="${res[i].image}" alt="">
    </div>

    <div class="item-info">
    <div>
    <span class="item-name">${res[i].title}</span>
    <span class="price">Rs : ${res[i].price}</span>
    </div>
    <button>ADD TO CART</button>
    </div>
    
    </div>`;  
}
}



async function fetchcategory(){
    let data = await fetch('https://fakestoreapi.com/products/categories');
    let res = await data.json();
    // console.log(res);
    for (let i = 0; i < res.length; i++) {
        select.innerHTML+=`<option value="${res[i]}">${res[i]}</option>`    
    }
    select.addEventListener('change', (event)=> {
        product_container.innerHTML=" ";
        if (event.target.value==="0") {
            fetchdata(url);
        } else {
            fetchdata(cat_url+event.target.value);
            console.log(cat_url+event.target.value); // 👉️ get selected VALUE
            
        }
});

}
fetchcategory()
fetchdata(url);



// document.addEventListener("DOMContentLoaded", function() {
    //     var slides = document.querySelectorAll(".slide");
//     var currentSlide = 0;
  
//     function showSlide(n) {
//       slides[currentSlide].classList.remove("actv");
//       currentSlide = (n + slides.length) % slides.length;
//       slides[currentSlide].classList.add("actv");
//     }

//     function nextSlide() {
    //       showSlide(currentSlide + 1);
    //     }
    
    //     setInterval(nextSlide, 1000); // Change slide every 3 seconds
    //   });



    const items = document.getElementsByClassName("items");
    const inputt = document.getElementById("input");
    var srchbtn = document.getElementById("srchbtn");
    console.log(items.length);
    // console.log(inputt.innerText.toUpperCase())
    function serchfun() {
        console.log(inputt.value.toUpperCase())
        // console.log(srch.toUpperCase())
        for (let i = 0; i < items.length; i++) {
            var srch = items[i].getAttribute("id")
            var srch1 = srch.toUpperCase();
            var input1 = inputt.value.toUpperCase();
            if (input1 == srch1 ) {
                // items[i].style.display=""
                console.log("by")
            }else if(input1 == ""){
                product_container.innerHTML=" ";
                fetchdata(url);
            }
            else {
                console.log("hi")
                items[i].style.display="none"
            }
            
        }
        
    }
    
    srchbtn.addEventListener("click",serchfun)