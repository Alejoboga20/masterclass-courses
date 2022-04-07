/// <reference types="cypress" />

context('Catalog Suite', () => {
  before(() => {
    cy.visit('');
  });

  it('Should Get Courses', () => {
    cy.get('[data-cy=instructors]').should('have.length.at.least', 5);
  });
});
