describe('RetrieveQuotation', () => {
    it('verify identification number', () => {

   cy.visit('https://demo.guru99.com/insurance/v1/index.php')
   
   cy.get('#email').type('skprasad@gmail.com')

   cy.get('#password').type('12345678')

   cy.get(':nth-child(3) > .btn').click()

   cy.get('#ui-id-3').click()

   cy.get('form > [type="text"]').type('20194')

   cy.get('#getquote').click()

})







   Cypress.on('uncaught:exception', (err, runnable) => {
    
    return false
})

})
