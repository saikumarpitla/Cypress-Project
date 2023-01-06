describe('LoginFailure', () => {
    it('verify Loginfail', () => {

   cy.visit('https://demo.guru99.com/insurance/v1/index.php')
   
   cy.get('#email').type('skprasad@gmail.com')

   cy.get('#password').type('1234567')

   cy.get(':nth-child(3) > .btn').click()

   Cypress.on('uncaught:exception', (err, runnable) => {
    
    return false

    })

})

})
