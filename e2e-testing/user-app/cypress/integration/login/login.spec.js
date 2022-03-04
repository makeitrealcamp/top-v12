describe('Login Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Does not do much', () => {
    expect(true).to.equal(true);
  });

  it('Should be sign in into app', () => {
    cy.get('[data-cy=email]').type('test1@test.com');
    cy.get('#password').type('12345678');
    cy.get('[data-cy=submit]').click();
    cy.get('h1').should('be.visible');
  });
});
