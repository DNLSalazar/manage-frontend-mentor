// Carousel's Variables

const carouselItems = document.getElementsByClassName('testimonial__item')
const carouselMarkers = document.querySelectorAll('.testimonials__carousel__marker--item')

const CAROUSEL_LENGTH = carouselItems.length

const CLASS_BEFORE = 'testimonial__item--before'
const CLASS_AFTER = 'testimonial__item--after'
const CLASS_CURRENT = 'testimonial__item--current'
const CAROUSEL_ACTIVATED = 'carousel__marker--activated'

// Nav Toggle Variables

const toggleButton = document.getElementById('toggleButton--nav')
const nav = document.getElementById('nav')

const CLASS_ACTIVATED = 'nav--activated'
const CLASS_BUTTON_ACTIVATED = 'nav-toggle--activated'

// Carouser Functionality

carouselMarkers.forEach(element => 
  element.addEventListener('click', moveCarousel)
);

function moveCarousel () {
  let flag = false
  for(let i = 0; i < CAROUSEL_LENGTH; i++) {
    carouselItems[i].classList.remove(CLASS_BEFORE)
    carouselItems[i].classList.remove(CLASS_AFTER)
    if (!flag) {
      if(this === carouselMarkers[i]){
        flag = true
        this.classList.add(CAROUSEL_ACTIVATED)
        carouselItems[i].classList.add(CLASS_CURRENT)
      } else {
        carouselMarkers[i].classList.remove(CAROUSEL_ACTIVATED)
        carouselItems[i].classList.add(CLASS_BEFORE)
      }
    } else {
      carouselMarkers[i].classList.remove(CAROUSEL_ACTIVATED)
      carouselItems[i].classList.add(CLASS_AFTER)
    }
  }
}

// Toggle Navigation Functionality

console.log(toggleButton)
toggleButton.addEventListener('click', toggleNav)

function toggleNav () {
  this.classList.toggle(CLASS_BUTTON_ACTIVATED)
  nav.classList.toggle(CLASS_ACTIVATED)
}