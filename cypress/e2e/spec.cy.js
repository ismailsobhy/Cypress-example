describe('Store demoblaze', () => { 
  const timestamp = Date.now()
  before(() => {
    cy.clearCookies()
    cy.visit('/')
  })
  
  it('User does not fill fields for signup', () => {
    cy.get("#signin2").click()
    cy.get("#signInModal button").contains("Sign up").click()
    cy.on('window:alert',(alert)=>{
      expect(alert).to.contains('Please fill out Username and Password.')
      return true
   })
  })
  
  it('User fills signup with valid creds', () => { 
    cy.get("#sign-password").type("test1234")
    cy.get("#sign-username").type(`bob+${timestamp}@gmail.com`)
    cy.get("#signInModal button").contains("Sign up").click()
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Sign up successful.')
      return true
    })
    cy.get("#signInModal").contains("Sign up").should("not.be.visible")
  })

  it('User adds two phones to cart',()=>{
    cy.get("#itemc").contains("Phones").click()
    cy.get("a.hrefch").contains("Samsung galaxy s6").click()
    cy.get("#tbodyid a").contains("Add to cart").click()
    cy.get("#tbodyid a").contains("Add to cart").click()
  })

  it('User deletes one phone from cart',()=>{
    cy.get("#cartur").click()
    cy.get("#tbodyid").find("tr[class='success']").should('have.length', 2)
    cy.get("#tbodyid a").contains("Delete").first().click()
    cy.get("#tbodyid").find("tr[class='success']").should('have.length', 1)
    cy.contains("Place Order").click()
  })

  it('User places order for remaining phone',()=>{
    cy.get("#name").type("Alice")
    cy.get("#country").type("England")
    cy.get("#city").type("London")
    cy.get("#card").type("1234123456785678")
    cy.get("#month").type("08")
    cy.get("#year").type("25")
    cy.get("div.modal-content").contains("Purchase").click()
    cy.contains("Thank you for your purchase!")
  })
})
