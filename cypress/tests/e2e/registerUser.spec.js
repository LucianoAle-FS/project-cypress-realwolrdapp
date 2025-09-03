import LoginPageReal from "../../pages/loginPageReal"
import RegisterPage from "../../pages/registerPage"

const Chance = require('chance');
const chance = new Chance()
const loginPageReal = new LoginPageReal()
const registerUser = new RegisterPage()



describe('Register user Real Word App Tests', () => {

  it ('Register - Success', () => {
    loginPageReal.acessLoginPage()
    registerUser.registerAccount(chance.first(), chance.last(), chance.first({nationality: "it"}), "test123", "test123")
  })

  it ('Register - Fail', () => {
    loginPageReal.acessLoginPage()
    registerUser.registerAccount(chance.first(), chance.last(), " ", "test123", "test123")
  })


})