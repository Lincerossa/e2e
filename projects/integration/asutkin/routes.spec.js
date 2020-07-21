const ASUTKIN = 'https://www.asutkin.com'

context('/', () => {
  beforeEach(() => {
    cy.visit(ASUTKIN)
  })

  it('cy.hash() - get the current URL hash', () => {
    cy.hash().should('be.empty')
  })

  it('cy.url() - get the current URL', () => {
    cy.url().should('eq', ASUTKIN)
  })
})