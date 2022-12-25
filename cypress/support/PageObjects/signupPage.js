class signupPage{
    
    getSignUpBtn(){
        return cy.get("#signInModal button").contains("Sign up");
    }

    getSignUpUsername(){
        return cy.get('#sign-username');
    }

    getSignUpPassword(){
        return cy.get('#sign-password');
    }

    getAlert(alertText){
        cy.on('window:alert',(alert)=>{
            expect(alert).to.contains(alertText)
            return true
        })
    }
}
export default new signupPage();