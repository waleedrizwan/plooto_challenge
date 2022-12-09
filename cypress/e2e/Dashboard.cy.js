describe('Company Selection Page', () => {
    beforeEach(() => {
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('https://happy-field-011ab7b10.2.azurestaticapps.net/login.html')
        cy.contains('Sign In').click()
        cy.get('table').contains('Plooto Inc').click()
      })
    
    it('Verify dashboard has loaded with no issue', () => {
        // checks for errors with loading the page
        // if the page loads without error it will contain the following text 
        cy.contains('Click here to finish company verification')
        cy.contains('Payment Approvals')
        cy.contains('Pending Payments')
        cy.contains('Completed Payments')
        cy.contains('Foreign Exchange Calculator')

    })
  })