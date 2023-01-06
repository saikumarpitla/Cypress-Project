describe('EditProfile', () => {
    it('verify edit Profile', () => {

   cy.visit('https://demo.guru99.com/insurance/v1/index.php')
   
   cy.get('#email').type('skprasad@gmail.com')

   cy.get('#password').type('12345678')

   cy.get(':nth-child(3) > .btn').click()

   cy.get('#ui-id-5').click()

   cy.get('#user_title').select('Mr').should('have.value','Mr')

   cy.scrollTo('bottom')

   cy.get('#user_surname').type('korutla')

   cy.get('#user_firstname').type('shivaprasad')

   cy.get('#user_phone').type('9576823441')

   cy.get('#user_dateofbirth_1i').select('1993').should('have.value','1993')

   cy.get('#user_dateofbirth_2i').select('May').should('have.value','5')

   cy.get('#user_dateofbirth_3i').select('10').should('have.value','10')

   cy.get('#user_licencetype_t').click()

   cy.get('#user_licenceperiod').select('5').should('have.value','5')

   cy.get('#user_occupation_id').select('Engineer').should('have.value','12')

   cy.get('#user_address_attributes_street').type('vivkenanda nagar road no 7')

   cy.get('#user_address_attributes_city').type('Hyderabad')

   cy.get('#user_address_attributes_county').type('India')

   cy.get('#user_address_attributes_postcode').type('504210')

   cy.get('#edit_user_ > .actions > .btn').click()









   








   Cypress.on('uncaught:exception', (err, runnable) => {
    
    return false
})

    })

})