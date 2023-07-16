let menu = document.querySelector('#menu-bars')
let navbar = document.querySelector('.nav-link')
const url = `https://fakestoreapi.com/products?limit=4`;

menu.onclick = ()=>{
    navbar.classList.toggle('active');
    menu.classList.toggle('fa-times')
}
window.onscroll=()=>{
    navbar.classList.remove('active');
    menu.classList.remove('fa-times')
}
const product_container = document.getElementById("feature-product");
const select = document.getElementById("slect")

async function fetchdata() {  

   let data = await fetch(url)
   let res = await data.json()

   for (let i = 0; i < res.length; i++) {
       console.log(res)
    product_container.innerHTML+=` <div class="items">
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
fetchdata();
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
