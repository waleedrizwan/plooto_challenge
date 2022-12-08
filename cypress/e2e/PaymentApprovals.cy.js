describe('Payment Approvals Page', () => {
    beforeEach(() => {
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('https://happy-field-011ab7b10.2.azurestaticapps.net/login.html')
        cy.contains('Sign In').click()
        cy.get('table').contains('Plooto Inc').click()
      })

    it('Selecting Payments Approvals displays payment approvals with no errors', ()=> {
        cy.contains('Payment Approvals').click()
        cy.contains('Payments Awaiting My Approval')
        cy.contains('All Payments Awaiting Approval')
    })
  })