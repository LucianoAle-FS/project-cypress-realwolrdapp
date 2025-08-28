import LoginPageReal from "../../pages/loginPageReal"
import database from "../../../data/database.json"


const loginPageReal = new LoginPageReal()




describe('Login Real Word App Tests', () => {

  it('Login - Success', () => {
    loginPageReal.acessLoginPage()
    loginPageReal.loginWithUser(database.users[0].username,"s3cret" )
  })

  it('Login - Fail', () => {
    loginPageReal.acessLoginPage()
    loginPageReal.loginWithUser(database.users[0].username, "incorrect")
    loginPageReal.checkAcessInvalid()

  })

})