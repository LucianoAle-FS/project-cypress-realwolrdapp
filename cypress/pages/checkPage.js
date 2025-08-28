
class CheckPage{
    selectorsList(){
        const selectors = {
            
            homepage: ".css-1idn90j-MuiGrid-root",
            firstName: "[name='firstName']",
            lastName: "[name='lastName']",
            userName: "[name='username']",
            password: "[name='password']",
            confirmPassword: "[name='confirmPassword']",
            submitButton:"[data-test='signup-submit']"
            
        }
        return selectors
    }
    checkpagehome(fistName, lastName, userName, password, confirmPassword){
        cy.get(this.selectorsList().homepage.click())
        cy.location('pathname').should('equals', 'localhost:3000/signup')
        cy.get(this.selectorsList().firstName.clear().type(fistName))
        cy.get(this.selectorsList().lastName.clear().type(lastName))
        cy.get(this.selectorsList().userName.clear().type(userName))
        cy.get(this.selectorsList().password.clear().type(password))
        cy.get(this.selectorsList().confirmPassword.clear().type(confirmPassword))
        cy.get(this.selectorsList().submitButton.click())
    }

   
    
}

export default CheckPage