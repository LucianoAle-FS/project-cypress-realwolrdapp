
class RegisterPage{
    selectorsList(){
        const selectors = {
            clickButtonRegister: "[data-test='signup']",
            
        }
        return selectors
    }
    checkpagehome(){
        cy.location('pathname').should('equals', 'localhost:3000')
        cy.get(this.selectorsList().homepage).should('be.visible')
    }

   
    
}

export default RegisterPage