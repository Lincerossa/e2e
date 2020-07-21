const ASUTKIN = Cypress.env('ASUTKIN')

context('routes: /', () => {
  beforeEach(() => {
    cy.visit(ASUTKIN)
  })

  it('cy.hash() - get the current URL hash', () => {
    cy.hash().should('be.empty')
  })

  it('cy.url() - get the current URL', () => {
    cy.url().should('contain', ASUTKIN)
  })
})