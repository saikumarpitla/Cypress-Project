describe('LoginTest', () => {
    it('verify title of the page', () => {

   cy.visit('https://demo.guru99.com/insurance/v1/index.php')
   
   cy.get('#email').type('skprasad@gmail.com')

   cy.get('#password').type('12345678')

   cy.get(':nth-child(3) > .btn').click()

   cy.get('#ui-id-2').click()

   cy.get('#ui-id-3').click()

   cy.get('#ui-id-4').click()

   cy.get('#ui-id-5').click()

   cy.get('.button_to > .btn').click()







   Cypress.on('uncaught:exception', (err, runnable) => {
    
    return false
})


})

})