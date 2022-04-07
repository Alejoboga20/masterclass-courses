/// <reference types="cypress" />

import { testCases } from './navigation.td';

context('Navigation Suite', () => {
  before(() => {
    cy.visit('');
  });

  testCases.forEach(test => {
    it(test.name, () => {
      cy.get(test.selector).click();
      cy.url().should('contain', test.route);
    });
  });
});
