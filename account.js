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
const login = document.getElementById("login");
const signup = document.getElementById("signup");
const loginbtn = document.getElementById("loginbtn");
const regbtn = document.getElementById("regbtn");

function hidefun() {
    if(login.style.display === "none"){
        login.style.display="block";
        signup.style.display="none";
    }
    else{
        signup.style.display="block";
        login.style.display="none";
    }
}
loginbtn.addEventListener("click", hidefun)
regbtn.addEventListener("click",hidefun)