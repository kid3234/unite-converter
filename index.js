/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el")
const pleEl = document.getElementById("ple-el")
const pvoEl = document.getElementById("pvo-el")
const pmaEl = document.getElementById("pma-el")
// const feet = (Number(inputEl.value) * 3.281).toFixed()
// const meter = (Number(inputEl.value) / 3.281).toFixed()


 const btn = document.getElementById("btn-el")
btn.addEventListener("click",function(){
    pleEl.textContent = `${inputEl.value} meters 
    = ${(Number(inputEl.value) * 3.281).toFixed(3)} feet |
     ${inputEl.value} feets = ${(Number(inputEl.value) / 3.281).toFixed(3)} meters`
     
     pvoEl.textContent = `${inputEl.value} liters 
    = ${(Number(inputEl.value) * 0.264).toFixed(3)} gallons |
     ${inputEl.value} gallons = ${(Number(inputEl.value) / 0.264).toFixed(3)} liters `
     
     pmaEl.textContent = `${inputEl.value} kilos
    = ${(Number(inputEl.value) * 2.204).toFixed(3)} pounds |
     ${inputEl.value} pounds = ${(Number(inputEl.value) / 2.204).toFixed(3)} kilos `
     
     
})

 
  