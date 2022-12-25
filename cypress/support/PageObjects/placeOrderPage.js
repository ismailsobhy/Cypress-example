class placeOrderPage{
   
    getNameField(){
        return cy.get("#name")
    }

    getCountryField(){
        return cy.get("#country")
    }

    getCityField(){
        return cy.get("#city")
    }

    getCardField(){
        return cy.get("#card")
    }

    getMonthField(){
        return cy.get("#month")
    }

    getYearField(){
        return cy.get("#year")
    }
    
    getPurchaseButton(){
        return cy.get("div.modal-content").contains("Purchase")
    }

    getCloseButton(){
        return cy.get("div.modal-content").contains("Close")
    }

    getSuccessMessage(){
        return cy.get('.sweet-alert > h2');
    }

    getConfirmAlert(){
        return cy.get('.sweet-alert .confirm');
    }
}
export default new placeOrderPage();