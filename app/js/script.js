const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const modal__open = document.getElementById('modal__open');
const modal = document.getElementById('modal');
const modal__close = document.getElementById('modal__close');
const header_link = document.getElementById('header_link');
const container = document.querySelector(".header__menu");

btnHamburger.addEventListener('click', function(){
  console.log('click hamburger');

  if(header.classList.contains('open')){ // Close Hamburger Menu
    body.classList.remove('noscroll');
    header.classList.remove('open');    
    fadeElems.forEach(function(element){
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
    
  }
  else { // Open Hamburger Menu
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach(function(element){
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });

    // then add event listener 
    container.addEventListener("click", () => {
    header.classList.remove("open");
    overlay.classList.remove("fade-in");
    container.classList.add("fade-out");
    body.classList.remove("noscroll");
});

  }  
});


