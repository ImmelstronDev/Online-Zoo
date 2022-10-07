

const debtAmounts = document.querySelectorAll("input[name='debt-amount']");
console.log(debtAmounts);

const inputValueAmount = document.querySelector(".donate__number__input");
console.log(inputValueAmount);


const transferRadioBtnValueToAmount = function(evt){
    const debtAmount = evt.target
    inputValueAmount.value = Number(debtAmount.value)
    console.log(debtAmount.value)  
};
// 8 7 5
debtAmounts.forEach(element => element.addEventListener('click', transferRadioBtnValueToAmount));


let index = 5; 
if(screen.width < 1600 && screen.width > 999){
    index = 12;
 }else if(screen.width <= 999){
     index = 17;
 }
const debtAmount = debtAmounts[index];
debtAmount.checked = true;
inputValueAmount.value = Number(debtAmount.value)


const checkRadioBtnHandler = function(evt){
    const inputArea = evt.target;
    let start = 0;
    let end = 9
    
    if (index === 12) {
        start = 9;
        end = 17;
    } else if (index === 17) {
        start = 17
        end = 20
    }
    

    for(let i = start; i < end; i++) {
        const radioBtn = debtAmounts[i]
        if (radioBtn.value === inputArea.value) {
            radioBtn.checked = true;
        } else {
            radioBtn.checked = false; 
        }
    }
}

inputValueAmount.addEventListener("input", checkRadioBtnHandler)




