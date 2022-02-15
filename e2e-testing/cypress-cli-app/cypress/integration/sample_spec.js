describe('Handle click', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('Should change the value when the element is clicked', () => {
    cy.get('[test-id="counterValue"]')
      .should('have.text', '1')
    cy.get('button').click()
    cy.get('[test-id="counterValue"]')
      .should('have.text', '2')
  })
})
