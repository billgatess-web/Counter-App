let counter = document.getElementsByClassName("count")[0];
let plusBtn = document.getElementsByClassName("plus-btn")[0];
let minusBtn = document.getElementsByClassName("minus-btn")[0];
let resetBtn = document.getElementsByClassName("reset-btn")[0];
let changeBy = document.getElementsByClassName("changeby")[0];


plusBtn.addEventListener("click", ()=>{
    const changeByValue = parseInt(changeBy.value)
    counter.innerText = parseInt(counter.innerText) + changeByValue;
}) 

minusBtn.addEventListener("click", ()=>{
    const changeByValue = parseInt(changeBy.value)
    counter.innerText = parseInt(counter.innerText) - changeByValue;
})

resetBtn.addEventListener("click", ()=>{
    counter.innerHTML = 0;
})