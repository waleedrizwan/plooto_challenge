describe('Company Selection Page', () => {
    beforeEach(() => {
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('https://happy-field-011ab7b10.2.azurestaticapps.net/login.html')
        cy.contains('Sign In').click()
      })
    
    it('Company Selection is displayed to user without any errors', () => {
        cy.contains('Go to Plooto Payments Dashboard')
        cy.contains('Clients')
        cy.contains('Add New Client')


    })

    it('Selecting Plooto Inc from client table takes user to dashboard', () => {

        cy.get('table').contains('Plooto Inc').click()

    })
  })