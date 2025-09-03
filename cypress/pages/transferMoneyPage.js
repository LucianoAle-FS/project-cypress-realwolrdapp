import { Chance } from "chance"
import CheckPage from "./checkPage"

const chance = new Chance()
const checkPage = new CheckPage()

class TransferMoneyPage{
    
    selectorsList(){
        const selectors = {
            buttonNewTransfer: "[data-test='nav-top-new-transaction']",
            personTransfer: "[data-test='user-list-item-GjWovtg2hr']",
            valuerDeposit: "[name='amount']",
            inforDeposti: "[placeholder='Add a note']"
            
        }
        return selectors
    }
    depositMoney(){
        cy.get(this.selectorsList().buttonNewTransfer).click()
        checkPage.checkPageTranfer()
        cy.get(this.selectorsList().personTransfer).click()
        cy.get(this.selectorsList().valuerDeposit).clear().type(chance.dollar({Max: 250}))

        cy.location('pathname').should('equals', 'localhost:3000')
        cy.get(this.selectorsList().homepage).should('be.visible')
    }

   
    
}

export default TransferMoneyPage