/// <reference types="cypress" />


describe('Registration in autoamtionpractice', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('http://automationpractice.com/index.php')
    })

    it('Login with valid Username and Password', () => {

        cy.title().should('eq', 'My Store')

        cy.contains('Sign in').click()

        cy.get('input[id="email"]').type('bekojo6799@dufeed.com')
        
        cy.get('input[id="passwd"]').type('login')

        cy.get('.submit').contains('Sign in').click()

        cy.url().should('eq','http://automationpractice.com/index.php?controller=my-account')
        
    })
})