const slider = document.querySelector('.scroll-body')
console.log(slider)

const carousel = document.querySelector('.testimonials-cards-container')
console.log(carousel)


let testimonialsCardWidth = 298;
if(screen.width <= 1599){
    testimonialsCardWidth = 323;
};

let prevSliderValue = slider.value;

console.log(carousel.offsetWidth)


slider.addEventListener('change', () => {
    let direction = slider.value - prevSliderValue;
    prevSliderValue = slider.value
    carousel.scrollLeft = carousel.scrollLeft + direction * testimonialsCardWidth
    console.log("direction: " + direction + ", scrollLeft: "  + carousel.scrollLeft)
})
