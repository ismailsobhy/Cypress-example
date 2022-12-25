class cartPage{
   
    getCartItems(){
        return  cy.get("#tbodyid").find("tr[class='success']")
    }
    
    getFirstDeleteButton(){
        return cy.get("#tbodyid tr").contains("Delete").first()
    }

    getPlaceOrderButton(){
        return cy.get("button").contains("Place Order")
    }

    getTotalPrice(){
        return cy.get("#totalp")
    }
}
export default new cartPage();