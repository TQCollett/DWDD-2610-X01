// inject current year

const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();

const hamMenu = document.querySelector('#hamburger')
const hamIcon = document.querySelector('#hamIcon')
const toggleNav = document.querySelector('#navWrapper')

hamMenu.addEventListener('click', () => {
    if (hamIcon.name === "menu-outline"){
        hamIcon.name = "close-outline"
        toggleNav.classList.toggle('hide')
    }
    else{
        hamIcon.name = "menu-outline"
        toggleNav.classList.toggle('hide')
    }
})
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  effect: 'cube',
  speed: 2000,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  // start autoplay
   autoplay: {
   delay: 5000,
 },
});


// dropdown


//Review Card Generation Maintenance Checklist
import {reviews} from "../data/reviews.js"
console.log(reviews)

const myReviews = document.querySelector('#reviews')

for (let x = 0; x < reviews.length; x++){
    const mySection = document.createElement('section')
    const myName = document.createElement('h3')
    myName.textContent = reviews[x].name
    const myReview = document.createElement('p')
    myReview.textContent = reviews[x].text
    
    const myRating = document.createElement('div')



    for(let step = 0; step<reviews[x].stars; step++){
        const genIndicator = document.createElement ('img')
        genIndicator.src= "../media/svg/star.svg"
        myRating.appendChild(genIndicator)
    }

    mySection.appendChild(myName)
    mySection.appendChild(myRating)
    mySection.appendChild(myReview)

    myReviews.appendChild(mySection)
}
