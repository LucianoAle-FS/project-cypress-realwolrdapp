import CheckPage from "./checkPage"

const checkPage = new CheckPage()

class LoginPageReal{
    selectorsList(){
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            submitLoginButton: "[type='submit']",
            wrongCredentialAlert: "[role='alert']",
        }
        return selectors
    }
    acessLoginPage(){
        cy.visit("/")
    }

    loginWithUser(username,password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().submitLoginButton).click({ force: true })
        checkPage.checkpagehome
        
    }

    

    checkAcessInvalid(){
        cy.get(this.selectorsList().wrongCredentialAlert)
    }
}

export default LoginPageReal