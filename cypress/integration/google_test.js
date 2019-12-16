/// <reference types="Cypress" />

beforeEach(function () {
    cy.log('I run before every test in every spec file!!!!!!');
    cy.visit('https://example.cypress.io/commands/querying');
})

it(
    'Can Find Button',
    () => {
        //cy.get ('#query-btn').should('contain', 'Button')
        cy.get('#querying .well>button:first').should('contain','Button')
    }
)

it('can find div with custom data atribute',() => {
    cy.get('[data-test-id ="test-example"]').should('have.class', 'example')
})

it(
    'Can Find Elements By Their Content', () => {
    cy.get('.query-list')
    .contains('bananas').should('have.class', 'third')
})

it(
    'can find elements by their content', () => {
    cy.get('.query-list')
    .contains('apples').should('have.class', 'first')
})