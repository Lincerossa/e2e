const ASUTKIN = Cypress.env('ASUTKIN')


context('actions', () => {
  beforeEach(() => {
    cy.visit(ASUTKIN)
  })

  it('check if escursioni menu item exists', () => {
    cy.findAllByText('Escursioni').should('exist')
    cy.findAllByText('ESCURSIONI2').should('not.exist')
  })
})