// inject current year
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();

const hamMenu = document.querySelector('#hamburger');
const navShow = document.querySelector('#navWrapper')

hamMenu.addEventListener('click', () => {
    if (hamMenu.className === "hide"){
        hamMenu.className = "show"
        hamMenu.src = "img/close.png"
        navShow.className = "show"
    }
    else{
        hamMenu.className = "hide"
        hamMenu.src = "img/hamburger.png"
        navShow.className = "hide"
    }
})