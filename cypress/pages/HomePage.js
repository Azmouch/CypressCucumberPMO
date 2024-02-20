class HomePage {

  
    visit() {
      cy.visit("https://www.saucedemo.com/v1/index.html")
    }
   



ClickMyAccount()
{
  return cy.get('.bm-burger-button > button').click()
}




}
  
  export default HomePage;


  