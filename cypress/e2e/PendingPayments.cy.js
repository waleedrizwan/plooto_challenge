describe('Pending Payment Approvals', () => {
    beforeEach(() => {
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('https://happy-field-011ab7b10.2.azurestaticapps.net/login.html')
        cy.contains('Sign In').click()
        cy.get('table').contains('Plooto Inc').click()
        
      })

    it('Selecting Pending Payments displays payments with no error ', ()=> {
        cy.contains('Pending Payments').click()
        cy.contains('Pending Payables')
        cy.contains('Pending Receivables')
      
    })
 
    it('Selecting any contact other than Cavages does not navigate to approval page ', () => {
      cy.contains('Pending Payments').click()
      cy.contains('Baltimore Markets').click()

      // should display payment details, approval process and audit trail information
      cy.contains('Pending Payables')
      cy.contains('Pending Receivables')
    
  })


    it('Selecting Cavages navigates to payment approval page ', ()=> {
        cy.contains('Pending Payments').click()
        cy.contains('Cavages').click()

        // should display payment details, approval process and audit trail information
        cy.contains('Sent Payment Details')
        cy.contains('Payment Approval History')
        cy.contains('Audit Trail')
      
    })
  })