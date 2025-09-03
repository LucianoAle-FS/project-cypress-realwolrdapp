class CheckPage{
    
    selectorsList(){
        const selectors = {
            homePage: ".css-1idn90j-MuiGrid-root",
            transferPage: "[data-test='users-list']"
        }
        return selectors
    }
    checkPageHome(){
        cy.location('pathname').should('equals', 'localhost:3000')
        cy.get(this.selectorsList().homePage).should('be.visible')
    }

    checkPageTranfer(){
        cy.location('pathname').should('equals', 'http://localhost:3000/transaction/new')
        cy.get(this.selectorsList().transferPage).should('be.visible')
    }
    
}

export default CheckPage