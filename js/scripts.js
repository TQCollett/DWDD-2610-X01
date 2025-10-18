// inject current year

const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();

const hamMenu = document.querySelector('#hamburger')
const hamIcon = document.querySelector('#hamIcon')
const navShow = document.querySelector('#menuItems')
const wrapperShow = document.querySelector('#navWrapper')

hamMenu.addEventListener('click', () => {
    if (hamMenu.className === "hide"){
        hamMenu.className = "show"
        hamIcon.name = "close-outline"
        navShow.className = "show"
        wrapperShow.className= "show"
    }
    else{
        hamMenu.className = "hide"
        hamIcon.name = "menu-outline"
        navShow.className = "hide"
        wrapperShow.className="hide"
    }
})

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