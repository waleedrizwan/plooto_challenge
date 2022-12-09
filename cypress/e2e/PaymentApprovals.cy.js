describe('Payment Approvals Page', () => {
    beforeEach(() => {
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('https://happy-field-011ab7b10.2.azurestaticapps.net/login.html')
        cy.contains('Sign In').click()
        cy.get('table').contains('Plooto Inc').click()
      })

    it('Selecting Payments Approvals displays payment approvals with no errors', () => {
        // selects the table element from the dom which contains the text and left clicks
        cy.contains('Payment Approvals').click()
        // checks for errors with loading the page
        // if the page loads without error it will contain the following text 
        cy.contains('Payments Awaiting My Approval')
        cy.contains('All Payments Awaiting Approval')
    })
  })