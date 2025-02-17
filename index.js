const convertBtn = document.querySelector("#convert-btn")
const inputField = document.querySelector("#input-field")
const lengthEl = document.querySelector("#length")
const volumeEl = document.querySelector("#volume")
const massEl = document.querySelector("#mass")

convertBtn.addEventListener("click", function() {
    const toConvert = inputField.value
    lengthEl.textContent = `${toConvert} meters = ${(toConvert * 3.280839895).toFixed(3)} feet | ${toConvert} feet = ${(toConvert / 3.280839895).toFixed(3)} meters`
    volumeEl.textContent = `${toConvert} liters = ${(toConvert * 0.26417205124156).toFixed(3)} gallons | ${toConvert} gallons = ${(toConvert / 0.26417205124156).toFixed(3)} liters`
    massEl.textContent = `${toConvert} kilos = ${(toConvert * 2.20462262185).toFixed(3)} pounds | ${toConvert} pounds = ${(toConvert / 2.20462262185).toFixed(3)} kilos`
})