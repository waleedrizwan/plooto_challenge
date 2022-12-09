describe('Company Selection Page', () => {
    beforeEach(() => {
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('https://happy-field-011ab7b10.2.azurestaticapps.net/login.html')
        cy.contains('Sign In').click()
      })
    
    it('Company Selection is displayed to user without any errors', () => {
        // checks for errors with loading the page
        // if the page loads without error it will contain the following text 
        cy.contains('Go to Plooto Payments Dashboard')
        cy.contains('Clients')
        cy.contains('Add New Client')


    })

    it('Selecting any company other than Plooto should not take us to dashboard ', () => {
      // selects the table element from the dom which contains the text and left clicks
      cy.get('table').contains('Record World').click()
      // the URL should contain company select
      cy.url().should('include', 'company_select.html')
      // if we remain on the dashboard, the page will contain the following text 
      cy.contains('Go to Plooto Payments Dashboard')
      cy.contains('Clients')
      cy.contains('Add New Client')

      // same test with different client
      cy.get('table').contains('Hit or Miss').click()
      // the URL should contain company select
      cy.url().should('include', 'company_select.html')
      // if we remain on the dashboard, the page will contain the following text 
      cy.contains('Go to Plooto Payments Dashboard')
      cy.contains('Clients')
      cy.contains('Add New Client')

      
  })

    it('Selecting Plooto Inc from client table takes user to dashboard', () => {
        // selects the table element from the dom which contains the text and left clicks
        cy.get('table').contains('Plooto Inc').click()
        // if the page loads without error it will contain the following text 
        cy.contains('Click here to finish company verification')
        cy.contains('Payment Approvals')
        cy.contains('Pending Payments')
        cy.contains('Completed Payments')
        cy.contains('Foreign Exchange Calculator')

        
    })


})