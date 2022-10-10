const nodeListPets = document.querySelectorAll('.pet-card');
console.log(nodeListPets)

const rightBtn = document.querySelector('#button-right')
console.log(rightBtn)

const leftBtn = document.querySelector('#button-left')
console.log(leftBtn)




let petCardCount = 6;
if(screen.width <= 999){
    petCardCount = 4;
}

let start = 0;




const petsArray = [];

for(const node of nodeListPets){
    petsArray.push(node);
}
console.log(petsArray)

petsArray.sort(() => Math.random() - 0.5)
console.log(petsArray)

for( let i = start; i < (start + petCardCount); i++){
    petsArray[i].style.display = "block"
}

rightBtn.addEventListener('click', () =>{
    for(let i = start; i < start + petCardCount; i++) {
        if(i >= petsArray.length) {
            break;
        }
        petsArray[i].style.display = "none"
    }
    console.log('1')
    start = start + petCardCount
    if (start >= petsArray.length) {
        start = 0
    }

    for(let i = start; i < start + petCardCount; i++) {
        if(i >= petsArray.length) {
            break;
        }
        petsArray[i].style.display = 'block'
    }
    console.log('2')
})


leftBtn.addEventListener('click', () =>{
    for(let i = start; i < start + petCardCount; i++) {
        if(i >= petsArray.length) {
            break;
        }
        petsArray[i].style.display = "none"
    }
    console.log('3')
    start = start - petCardCount
    if(start < 0) {
        start = Math.floor(petsArray.length / petCardCount) * petCardCount
    }
    for(let i = start; i < start + petCardCount; i++) {
        if(i >= petsArray.length) {
            break;
        }
        petsArray[i].style.display = 'block'
    }
    console.log('4')
})

