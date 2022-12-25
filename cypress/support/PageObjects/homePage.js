class homePage{
   
    getHomeTab(){
        return cy.get('a.nav-link').contains("Home");
    }

    getSignUpTab(){
        return cy.get('#signin2');
    }

    getCartTab(){
        return cy.get('#cartur');
    }

    getProductCategory(){
        return cy.get("#itemc").contains("Phones");
    }

    getProduct(type){
        return cy.get("a.hrefch").contains(type);
    }

    getSignInTab(){
        return cy.get('#login2');
    }
    getLogsOutTab(){
        return cy.get('#logout2');
    }
    
}
export default new homePage();