const ASUTKIN = Cypress.env('ASUTKIN')


context('actions', () => {

  beforeEach(() => {
    cy.visit(ASUTKIN)
  })

  it('gatsby is there', () => {
    // https://on.cypress.io/type
    cy.get('#___gatsby')
      .should('be.visible')
  })

  it('hamburger is there', () => {
    // https://on.cypress.io/focus
    cy.get('[class*=styles__MenuItem-]')
      .should('be.visible')
  })
})
