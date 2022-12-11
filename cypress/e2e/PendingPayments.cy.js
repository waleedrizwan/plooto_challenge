describe('Pending Payment Approvals', () => {
    beforeEach(() => {
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('https://happy-field-011ab7b10.2.azurestaticapps.net/login.html')
        cy.contains('Sign In').click()
        cy.get('table').contains('Plooto Inc').click()
        
      })

    it('Selecting Pending Payments displays payments with no error ', ()=> {
        // select and clicks link containing 'pending payments' text 
        cy.contains('Pending Payments').click()
        // user succesfully navigates to pending payments page and it contains the following text
        cy.contains('Pending Payables')
        cy.contains('Pending Receivables')
      
    })
 
    it('Selecting any contact other than Cavages does not navigate to approval page ', () => {
     // select and clicks link containing 'pending payments' text 
      cy.contains('Pending Payments').click()
     // select and clicks link containing 'baltimore markets' text 
      cy.contains('Baltimore Markets').click()
      // user remains on pending payments page and the following text will display
      cy.contains('Pending Payables')
      cy.contains('Pending Receivables')
    
  })


    it('Selecting Cavages navigates to payment approval page ', ()=> {
        // select and clicks link containing 'pending payments' text   
        cy.contains('Pending Payments').click()
        // select and clicks link containing 'Cavages' text 
        cy.contains('Cavages').click()

        // should display payment details, approval process and audit trail information
        cy.contains('Sent Payment Details')
        cy.contains('Payment Approval History')
        cy.contains('Audit Trail')
      
    })
  })