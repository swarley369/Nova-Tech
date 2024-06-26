const menuBtEl = document.querySelector(".menu");
const navbarEl = document.querySelector(".navbar");

menuBtEl.addEventListener("click", ()=>{
  navbarEl.classList.toggle("mobile-active")
})