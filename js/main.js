const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelectorAll('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.forEach(item => item.classList.add('open'))
    navItems.forEach(item => item.classList.add('open'));

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.forEach(item => item.classList.remove('open'))
    navItems.forEach(item => item.classList.remove('open'));

    showMenu = false;
  }
}

let setName = document.getElementById("name");
let setInfo = document.getElementById("info") 
let textinit = 0 ;
let textinfo = "A UI Developer crafting intuitive, engaging interfaces"
let textstart = 'Nice meeting you';
let textspeed = 50;
window.onload = function typing() {
if(  textinit < textinfo.length){
    // setName.innerHTML += textstart.charAt(textinit);
    setInfo.innerHTML += textinfo.charAt(textinit)
    textinit++
    setTimeout(typing, textspeed)
}}