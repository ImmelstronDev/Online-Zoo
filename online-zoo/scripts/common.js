const logoInBurger = document.querySelector("#site-logo-burger");
console.log(logoInBurger);

const navList = document.querySelector("ul[class='header-nav-list']");
console.log(navList)

const burgerBtn = document.querySelector("#menu__toggle")
const burgerLabel = document.querySelector(".menu__btn")
console.log(burgerBtn)

const layer = document.querySelector('#layer')


let navShowed = false; 

const burgerMenu = function(evt){
    evt.stopPropagation()
    if (!navShowed) {
        console.log('1')
        navList.style.display = "block";
        logoInBurger.style.display = "block"
        layer.style.display = "block";
        navShowed = true
    } else {
        console.log('2')
        navList.style.display = "none";
        logoInBurger.style.display = "none";
        layer.style.display = "none";
        navShowed = false;
    }

}

burgerBtn.addEventListener('click', burgerMenu);

addEventListener('click', evt => {
    if (!navShowed || evt.target === burgerBtn || evt.target === burgerLabel || burgerLabel.contains(evt.target)) {
        return;
    }
    
    if(!navList.contains(evt.target)) {
        navList.style.display = "none";
        logoInBurger.style.display = "none";
        layer.style.display = "none";
        navShowed = false;
        burgerBtn.checked = false;
    } 
})
