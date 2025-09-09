import CheckPage from "./checkPage"
import MoneyAccountPage from "./moneyAccountPage";



const checkPage = new CheckPage()
const moneyAccountPage = new MoneyAccountPage();


class TransferMoneyPage {

    selectorsList() {
        const selectors = {
            buttonNewTransfer: "[data-test='nav-top-new-transaction']",
            personTransfer: ".css-1p823my-MuiListItem-root",
            valuerDeposit: "[name='amount']",
            inforDeposti: "[placeholder='Add a note']",
            buttonConfirm: "[data-test='transaction-create-submit-payment']",
            ButtonBackHomePage: "[data-test='new-transaction-return-to-transactions']",
            textNoValueDeposit: "[data-test='transaction-create-amount-input']"

        }
        return selectors
    }

    depositMoney() {
        cy.get(this.selectorsList().buttonNewTransfer).click({ force: true })
        checkPage.checkPageTranfer()

        cy.get(this.selectorsList().personTransfer).first().click()

        moneyAccountPage.valueAccount().then((randomValue) => {
            cy.get(this.selectorsList().valuerDeposit).clear().type(randomValue.toString())
        })

        cy.get(this.selectorsList().inforDeposti).clear().type("teste 1")
        cy.get(this.selectorsList().buttonConfirm).click({ force: true })
        cy.get(this.selectorsList().ButtonBackHomePage).click()
        //checkPage.checkPageHome()

    }

    depositMoneyFail() {
        cy.get(this.selectorsList().buttonNewTransfer).click({ force: true })
        checkPage.checkPageTranfer()
        cy.get(this.selectorsList().personTransfer).first().click()
        cy.get(this.selectorsList().valuerDeposit).clear()
        cy.get(this.selectorsList().textNoValueDeposit).should('be.visible')
        cy.get(this.selectorsList().inforDeposti).clear().type("teste Sem Valor")
        cy.get(this.selectorsList().buttonConfirm).should('be.disabled')
    }



}

export default TransferMoneyPage