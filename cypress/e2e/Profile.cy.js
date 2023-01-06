describe('Profile', () => {
    it('verify Profile of the page', () => {

   cy.visit('https://demo.guru99.com/insurance/v1/index.php')
   
   cy.get('#email').type('skprasad@gmail.com')

   cy.get('#password').type('12345678')

   cy.get(':nth-child(3) > .btn').click()

   cy.get('#ui-id-4').click()

   cy.wait(4000)

   cy.get('.button_to > .btn').click()






   Cypress.on('uncaught:exception', (err, runnable) => {
    
    return false
})

    })

})