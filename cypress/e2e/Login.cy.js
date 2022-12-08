describe('Login Page', () => {
    beforeEach(() => {
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('https://happy-field-011ab7b10.2.azurestaticapps.net/login.html')
      })
    
    it('Login Page loads without error', () => {
      // checks for the welcome back title page to verify the page has loaded without error
      cy.visit('https://happy-field-011ab7b10.2.azurestaticapps.net/login.html') 
      cy.contains('Welcome back')
    })
    
    it('Sign in takes user to Company Selection Screen', () => {
        // select button element and left click
        cy.contains('Sign In').click()
        // check for correct URL 
        cy.url().should('include', 'company_select.html')
        cy.url().should('eq', 'https://happy-field-011ab7b10.2.azurestaticapps.net/company_select.html')
        // checks for errors with loading the page
        // if the page loads without error it will contain the text Plooto Inc
        cy.contains('Plooto Inc')
    })
  })