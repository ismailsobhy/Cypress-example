class productPage{
   
    getAddCartButton(){
        return cy.get("#tbodyid a").contains("Add to cart")
    }
    
}
export default new productPage();