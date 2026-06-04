it('Google Search',()=>{

    cy.visit('https://www.google.com')

    cy.get('[name="q"]').type('Mobile Automation Tutorial{enter}')
    // cy.contains('Google Search').click()
    
})