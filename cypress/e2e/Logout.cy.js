describe('Logout', () => {
    it('verify logout of the page', () => {

   cy.visit('https://demo.guru99.com/insurance/v1/index.php')
   
   cy.get('#email').type('skprasad@gmail.com')

   cy.get('#password').type('12345678')

   cy.get(':nth-child(3) > .btn').click()

   cy.get('.button_to > .btn').click()



Cypress.on('uncaught:exception', (err, runnable) => {
    
    return false
})

    })

})
