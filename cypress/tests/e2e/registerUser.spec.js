import LoginPageReal from "../../pages/loginPageReal"
import database from "../../../data/database.json"
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


})