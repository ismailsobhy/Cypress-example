import signupPage from "../support/PageObjects/signupPage"
import homePage from "../support/PageObjects/homePage"
import productPage from "../support/PageObjects/productPage"
import cartPage from "../support/PageObjects/cartPage"
import placeOrderPage from "../support/PageObjects/placeOrderPage"

describe('Store demoblaze', () => { 
  const timestamp = Date.now()
  let data;  
  before(() => {
    cy.fixture('example').then(function (pdata) {
      data = pdata;
    })  
    cy.clearCookies()
    cy.visit('/')
  })
  
  it('User does not fill fields for signup', () => {
    homePage.getSignUpTab().click()
    signupPage.getSignUpBtn().click()
    signupPage.getAlert('Please fill out Username and Password.')
  })
  
  it('User fills signup with valid creds', () => { 
    signupPage.getSignUpPassword().invoke('val', 'test1234')
    signupPage.getSignUpUsername().type(`bob+${timestamp}@gmail.com`)
    signupPage.getSignUpBtn().click();
    signupPage.getAlert('Sign up successful.')
    signupPage.getSignUpBtn().should("not.be.visible")
  })

  it('User adds two phones to cart',()=>{
    homePage.getProductCategory();
    homePage.getProduct(data.productNameOne).click()
    // Click two times to get two phones
    productPage.getAddCartButton().click()
    productPage.getAddCartButton().click()
  })

  it('User deletes one phone from cart',()=>{
    homePage.getCartTab().click();
    cartPage.getCartItems().should('have.length', 2)
    cartPage.getFirstDeleteButton().click();
    cartPage.getCartItems().should('have.length', 1)
    cartPage.getTotalPrice().contains( new RegExp(
      "^" + data.totalPrice + "$",
      "g"
    ))
    
    cartPage.getPlaceOrderButton().click()
  })

  it('User places order for remaining phone',()=>{
    placeOrderPage.getNameField().type(data.buyerName)
    placeOrderPage.getCountryField().type(data.country)
    placeOrderPage.getCityField().type(data.city)
    placeOrderPage.getCardField().type(data.card)
    placeOrderPage.getMonthField().type(data.month)
    placeOrderPage.getYearField().type(data.year)
    placeOrderPage.getPurchaseButton().click()
    placeOrderPage.getSuccessMessage().should("have.text",
    "Thank you for your purchase!")
    placeOrderPage.getConfirmAlert().click()
  })
})

