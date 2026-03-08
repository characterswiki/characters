document.addEventListener("DOMContentLoaded", function(){

/* MOBILE MENU */

const menuBtn=document.getElementById("menu-toggle");
const nav=document.getElementById("main-nav");

if(menuBtn){
menuBtn.addEventListener("click",function(){
nav.classList.toggle("show");
});
}

/* DARK MODE */

const themeBtn=document.getElementById("theme-toggle");

if(themeBtn){

const savedTheme=localStorage.getItem("theme");

if(savedTheme==="dark"){
document.body.classList.add("dark-mode");
}

themeBtn.addEventListener("click",function(){

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
localStorage.setItem("theme","dark");
}else{
localStorage.setItem("theme","light");
}

});

}

});
