const passwordCharacters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz123456789$~|>=<+^%#&\/*@{}[]().?!:;,-_"
const firstPassword = document.getElementById("first-pass-el")
const secondPassword = document.getElementById("second-pass-el")
const thirdPassword = document.getElementById("third-pass-el")
const fourthPassword = document.getElementById("fourth-pass-el")
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