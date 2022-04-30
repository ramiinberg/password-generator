let passwordCharacters = "123456789"
console.log(passwordCharacters.length)
let firstPassword = document.getElementById("first-pass-el")
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
}