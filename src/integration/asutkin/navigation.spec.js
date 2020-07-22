const ASUTKIN = Cypress.env('ASUTKIN')

context('Navigation: from homepage to escursioni', () => {
  beforeEach(() => {
    cy.visit(ASUTKIN)
    cy.wait(2000)
    cy.get('[class*=styles__MenuItem-]').first().find('a').click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', 'escursioni')

    cy.go('back')
    cy.location('pathname').should('not.include', 'escursioni')
    cy.go('forward')
    cy.location('pathname').should('include', 'escursioni')
  })
})
context('Navigation: from escursioni to homepage', () => {
  beforeEach(() => {
    cy.visit(`${ASUTKIN}/escursioni`)
    cy.wait(2000)
    cy.get('[class*=styles__Logo-]').find('a').click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {
    cy.location('pathname').should('not.include', 'escursioni')
    cy.go('back')
    cy.location('pathname').should('include', 'escursioni')
    cy.go('forward')
    cy.location('pathname').should('not.include', 'escursioni')
  })
})
