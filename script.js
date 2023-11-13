AOS.init();

const addEventOnElements = function (elements, eventType, callback) {
 
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

const header = document.querySelector("[data-header]");


/** Slider **/

const sliders =document.querySelectorAll("[data-slider]");

const initSlider = function(currentSlider) {

  const sliderContainer = currentSlider.querySelector("[data-slider-container]");
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  let currentSlidePos = 0;

  const moveSliderItem = function() {
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`
  }

  /** Next Slide **/

  const slideNext = function() {
    const slideEnd = currentSlidePos >= sliderContainer.childElementCount - 1;

    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }

    moveSliderItem();
  }

  sliderNextBtn.addEventListener("click", slideNext);


  /** Previous Slide **/

  const slidePrev = function() {
    

    if (currentSlidePos <= 0) {
      currentSlidePos = sliderContainer.childElementCount - 1;
    } else {
      currentSlidePos--;
    }

    moveSliderItem();
  }

  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = sliderContainer.childElementCount <= 1;

  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = "none";
    sliderPrevBtn.style.display = "none";
  }
}

for (let i = 0; i < sliders.length; i++) {

  initSlider(sliders[i]);
}

/** About Section **/

const accordions = document.querySelectorAll("[data-accordion]");

let lastActiveAccordion = accordions[0];

const initAccordion = function (currentAccordion) {

  const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");

  const expandAccordion = function() {
    if (lastActiveAccordion && lastActiveAccordion != currentAccordion) {
      lastActiveAccordion.classList.remove("expanded");
    }

    currentAccordion.classList.toggle("expanded");

    lastActiveAccordion = currentAccordion;
  }

  accordionBtn.addEventListener("click", expandAccordion);

}

for (let i = 0; i < accordions.length; i++) {
  initAccordion(accordions[i]);
}

// Event Listener for the hero buttons

function redirectToWhatsApp() {
  window.open( "https://api.whatsapp.com/send?phone=5515981871191&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta...%20Podemos%20conversar%3F", "blank");
}

// Alert para Agendamento de consulta

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
let isAlertVisible = false;
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')
  alertPlaceholder.innerHTML = '';
  alertPlaceholder.append(wrapper)
  isAlertVisible = true;
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    if (!isAlertVisible) {
      appendAlert('Confirmaremos o agendamento em breve', 'success');
    }
  });
}

// Navbar Offset closing when click on anchor links happen

document.addEventListener('DOMContentLoaded', function() {
  let offcanvasNavbar = document.getElementById('offcanvasNavbar2');
  let bootstrapOffcanvas = new bootstrap.Offcanvas(offcanvasNavbar);

  let navLinksContainer = document.getElementById('nav-links');
  navLinksContainer.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      event.preventDefault();
      let targetId = event.target.getAttribute('href');
      let targetElement = document.querySelector(targetId);
      bootstrapOffcanvas.hide();
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Tooltip on the whatsapp icon

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

