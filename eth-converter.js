const actualDate = document.querySelector('.date')
const inputValue = document.querySelector('.value')
const dropDown = document.querySelector('.drop-down-arrow')
const spans = document.querySelector('.spans')
const defaultNav = document.querySelector('.default')
const weiUnit = document.querySelectorAll('.wei-units')
const p_ether = document.querySelector('.p-eth')
const convertBtn = document.querySelector('.convert-button')
// result section
const default0 = document.querySelector('.default0')
const p_wei = document.querySelector('.p-wei')
const resultValue = document.querySelector('.result-value')
const spans0 = document.querySelector('.spans0')
const arrowResult = document.querySelector('.result-arrow')
const gweiUnit = document.querySelectorAll('.gwei-units')

// display date
actualDate.textContent = Date();

// display drop-down
dropDown.addEventListener('click', function(){
    spans.style.display = "flex";
    defaultNav.style.display = "none"
})

// display 2nd section dropdown
arrowResult.addEventListener('click', function(){
    spans0.style.display = "flex";
    default0.style.display = "none"
})

// select from drop-down
for(let i = 0; i < weiUnit.length; i++) {
    weiUnit[i].addEventListener('click', function(){
        spans.style.display = "none";
        defaultNav.style.display = "flex";
        p_ether.textContent = weiUnit[i].textContent
    })
}
// select from result dropdown 
for(let x = 0; x < gweiUnit.length; x++) {
    gweiUnit[x].addEventListener('click', function(){
        spans0.style.display = "none";
        default0.style.display = "flex";
        p_wei.textContent = gweiUnit[x].textContent;
    })
}
const ethValue = 1;
const weiValue = 1000000000000000000;
const gweiValue = 1000000000;

// convert 
convertBtn.addEventListener('click', function(){
    // convert eth to wei
    if(p_ether.textContent == weiUnit[0].textContent && p_wei.textContent === gweiUnit[2].textContent) {
       resultValue.value = inputValue.value * weiValue; 
    } // convert eth to gwei 
    else if(p_ether.textContent == weiUnit[0].textContent && p_wei.textContent === gweiUnit[1].textContent){
        resultValue.value = inputValue.value * gweiValue;
    } // convert gwei to eth
    else if(p_ether.textContent == weiUnit[1].textContent && p_wei.textContent === gweiUnit[0].textContent){
        resultValue.value = inputValue.value /parseFloat(gweiValue);
    } // convert gwei to wei
    else if(p_ether.textContent == weiUnit[1].textContent && p_wei.textContent === gweiUnit[2].textContent){
        resultValue.value = inputValue.value * gweiValue;
    } // convert wei to gwei
    else if(p_ether.textContent == weiUnit[2].textContent && p_wei.textContent === gweiUnit[1].textContent){
        resultValue.value = inputValue.value /parseFloat(gweiValue);
    } // convert wei to eth
    else if(p_ether.textContent == weiUnit[2].textContent && p_wei.textContent === gweiUnit[0].textContent){
        resultValue.value = inputValue.value /parseFloat(weiValue);
    }
})

// 68E3C2D217C9F637FCB080268DF817B6015F

