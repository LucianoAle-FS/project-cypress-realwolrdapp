import LoginPageReal from "../../pages/loginPageReal"
import database from "../../../data/database.json"
import TransferMoneyPage from "../../pages/transferMoneyPage"

const transferMoneyPage = new TransferMoneyPage()

const loginPageReal = new LoginPageReal()




describe('Login Real Word App Tests', () => {
  

  it('Transfer Money - Success', () => {
    loginPageReal.acessLoginPage()
    loginPageReal.loginWithUser(database.users[2].username,"s3cret" )
    transferMoneyPage.depositMoney()
  })

  it('Transfer Money - Fail', () => {
    loginPageReal.acessLoginPage()
    loginPageReal.loginWithUser(database.users[0].username,"s3cret" )
    transferMoneyPage.depositMoneyFail()
  })

})