let passwordCharacters = "123456789"
console.log(passwordCharacters.length)
let firstPassword = document.getElementById("first-pass-el")
let secondPassword = document.getElementById("second-pass-el")
let thirdPassword = document.getElementById("third-pass-el")
let fourthPassword = document.getElementById("fourth-pass-el")
const passwordLength = 20;

function generateRandomPassword() {
  let newPassword = ''
  for(let i = 0; i < passwordLength; i++) {
    const randomCharacter = Math.floor(Math.random() * passwordCharacters.length)
    newPassword += passwordCharacters[randomCharacter]
  }
  return newPassword
}

function startProgram() {
  firstPassword.textContent = generateRandomPassword()
  secondPassword.textContent = generateRandomPassword()
  thirdPassword.textContent = generateRandomPassword()
  fourthPassword.textContent = generateRandomPassword()
}