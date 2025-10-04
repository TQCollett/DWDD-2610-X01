// inject current year
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();

const hamMenu = document.querySelector('#hamburger')
const hamIcon = document.querySelector('#hamIcon')
const navShow = document.querySelector('#menuItems')

hamMenu.addEventListener('click', () => {
    if (hamMenu.className === "hide"){
        hamMenu.className = "show"
        hamIcon.name = "close-outline"
        navShow.className = "show"
    }
    else{
        hamMenu.className = "hide"
        hamIcon.name = "menu-outline"
        navShow.className = "hide"
    }
})