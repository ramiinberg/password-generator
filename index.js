const firstPassword = document.getElementById("first-pass-el")
const secondPassword = document.getElementById("second-pass-el")
const thirdPassword = document.getElementById("third-pass-el")
const fourthPassword = document.getElementById("fourth-pass-el")
const lettersCheckbox = document.getElementById("letters")
const specialsCheckbox = document.getElementById("specials")
const numbersCheckbox = document.getElementById("numbers")
const generateButton = document.getElementById("btn-generate")
const passwordSlider = document.getElementById("range-password")
const output = document.getElementById("output")

let isLettersEnabled = true
let isNumbersEnabled = true
let isSpecialsEnabled = true
let passwordLength = 20;


lettersCheckbox.addEventListener("click", function () {
  isLettersEnabled = refreshEnabledValue(lettersCheckbox)
  shouldCheckboxButtonBeDisabled()
})

specialsCheckbox.addEventListener("click", function () {
  isSpecialsEnabled = refreshEnabledValue(specialsCheckbox)
  shouldCheckboxButtonBeDisabled()
})

numbersCheckbox.addEventListener("click", function () {
  isNumbersEnabled = refreshEnabledValue(numbersCheckbox)
  shouldCheckboxButtonBeDisabled()
})

passwordSlider.onchange = function() {
  passwordLength = this.value
  output.textContent = this.value
}

function generateRandomPassword() {

  let passwordCharacters = ""

  if(isLettersEnabled) {
    passwordCharacters += "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
  }

  if(isNumbersEnabled) {
    passwordCharacters += "0123456789"
  }

  if(isSpecialsEnabled) {
    passwordCharacters += "$~|>=<+^%#&\/*@{}[]().?!:;,-_"
  }

  let newPassword = ''
  if(passwordCharacters) {
    for(let i = 0; i < passwordLength; i++) {
      const randomCharacter = Math.floor(Math.random() * passwordCharacters.length)
      newPassword += passwordCharacters[randomCharacter]
    }
  }

  return newPassword
}

function refreshEnabledValue(checkbox) {
  if(checkbox.checked) {
    return true
  } 
  return false
}

function shouldCheckboxButtonBeDisabled() {
  if(!isLettersEnabled && !isNumbersEnabled && !isSpecialsEnabled) {
    generateButton.disabled = true
  }
  else {
    generateButton.disabled = false
  }
}


function startProgram() {
  firstPassword.textContent = generateRandomPassword()
  secondPassword.textContent = generateRandomPassword()
  thirdPassword.textContent = generateRandomPassword()
  fourthPassword.textContent = generateRandomPassword()
}