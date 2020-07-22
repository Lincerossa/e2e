const ASUTKIN = Cypress.env('ASUTKIN')


context('actions', () => {
  beforeEach(() => {
    cy.visit(ASUTKIN)
  })

  it('gatsby is there', () => {
    cy.get('#___gatsby')
      .should('be.visible')
  })
  

  it('hamburger is there', () => {
    cy.get('[class*=styles__MenuItem-]')
      .should('be.visible')
  })
  it('main is there', () => {
    cy.get('[class*=styles__Main-]')
      .should('be.visible')
      .should('have.length', 1)
      .should('have.prop', 'tagName' ).should('eq', 'MAIN')
  })
  it('main  tagName is right', () => {
    cy.get('[class*=styles__Main-]')
      .should('have.prop', 'tagName' ).should('eq', 'MAIN')
  })
})
