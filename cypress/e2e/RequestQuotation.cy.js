describe('RequestQuotation', () => {
    it('verify Quotation of a page', () => {

   cy.visit('https://demo.guru99.com/insurance/v1/index.php')
   
   cy.get('#email').type('skprasad@gmail.com')

   cy.get('#password').type('12345678')

   cy.get(':nth-child(3) > .btn').click()

   cy.get('#ui-id-2').click()
   cy.scrollTo('bottom') 
   cy.get('#quotation_breakdowncover').select('Roadside').should('have.value','2')
   
   cy.get('#new_quotation > :nth-child(6)').click()
   cy.wait(10000)
   cy.get('#quotation_windscreenrepair_f').click()
   cy.get('#quotation_incidents').type('Accident')
   cy.get('#quotation_vehicle_attributes_registration').type('MH23FF6784')
   cy.get('#quotation_vehicle_attributes_mileage').type('12000 Kms')
   cy.get('#quotation_vehicle_attributes_value').type('1000000')
   cy.get('#quotation_vehicle_attributes_parkinglocation').select('Private property').should('have.value','Private property')
   cy.get('.newadd > :nth-child(8)')
   cy.get('#quotation_vehicle_attributes_policystart_1i').select('2016').should('have.value','2016')
   cy.get('#quotation_vehicle_attributes_policystart_2i').select('August').should('have.value', '8')
   

   cy.get('#quotation_vehicle_attributes_policystart_3i').select('16').should('have.value','16')

   
   cy.get('#new_quotation > .actions > .btn-success').click()
   


   Cypress.on('uncaught:exception', (err, runnable) => {
    
    return false
})

    })

})
