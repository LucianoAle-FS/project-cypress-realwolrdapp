
const Chance = require('chance');
const chance = new Chance()

class MoneyAccountPage {

    selectorsList() {
        const selectors = {
            valueAccount: "[data-test='sidenav-user-balance']"
        }
        return selectors
    }

    // I created an amount based on the maximum that the account supports, 
    // as the system has a bug, allowing me to deposit any amount
    //cy.get(this.selectorsList().valuerDeposit).clear().type(amount.toString())

    valueAccount() {
        // Takes the balance text, removes symbols and converts to number
        return cy.get(this.selectorsList().valueAccount).invoke('text')
        .then((balanceText) => {
            const balance = parseFloat(balanceText.replace(/[$,]/g, ''));

            // Generates a random value between 1 and the account balance and returns it
            return chance.floating({ min: 0, max: balance, fixed: 2 });

        });
    }



}



export default MoneyAccountPage