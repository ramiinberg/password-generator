const passwordCharacters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz123456789$~|>=<+^%#&\/*@{}[]().?!:;,-_"
const firstPassword = document.getElementById("first-pass-el")
const secondPassword = document.getElementById("second-pass-el")
const thirdPassword = document.getElementById("third-pass-el")
const fourthPassword = document.getElementById("fourth-pass-el")
const passwordLength = 20;
const lettersCheckbox = document.getElementById("letters")
const specialsCheckbox = document.getElementById("specials")
const numbersCheckbox = document.getElementById("numbers")

let isLettersEnabled = true
let isNumbersEnabled = true
let isSpecialsEnabled = true

function generateRandomPassword() {
  let newPassword = ''
  for(let i = 0; i < passwordLength; i++) {
    const randomCharacter = Math.floor(Math.random() * passwordCharacters.length)
    newPassword += passwordCharacters[randomCharacter]
  }
  return newPassword
}

lettersCheckbox.addEventListener("click", function () {
  isLettersEnabled = refreshEnabledValue(lettersCheckbox)
})

specialsCheckbox.addEventListener("click", function () {
  isSpecialsEnabled = refreshEnabledValue(specialsCheckbox)
  console.log("isSpecialsEnabled", isSpecialsEnabled)
})

numbersCheckbox.addEventListener("click", function () {
  isNumbersEnabled = refreshEnabledValue(numbersCheckbox)
  console.log("isNumbersEnabled", isNumbersEnabled)
})


function refreshEnabledValue(checkbox) {
  if(checkbox.checked) {
    return true
  } 
  return false
}


function startProgram() {
  firstPassword.textContent = generateRandomPassword()
  secondPassword.textContent = generateRandomPassword()
  thirdPassword.textContent = generateRandomPassword()
  fourthPassword.textContent = generateRandomPassword()
}