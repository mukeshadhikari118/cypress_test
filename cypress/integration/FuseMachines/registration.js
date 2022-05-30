// registration.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="cypress" />

describe('Registration in autoamtion practice', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('http://automationpractice.com/index.php')
    })

    it('register with valid data', () => {
        // We use the `cy.get()` command to get all elements that match the selector.
        // Then, we use `should` to assert that there are two matched items,
        // which are the two default items.
        cy.title().should('eq', 'My Store')

        cy.contains('Sign in').click()

        cy.get('input[id="email_create"]').type('bekojo6666669@dufeed.com')
        
        cy.get('button[id="SubmitCreate"]').click()
        
        cy.get('form[id="account-creation_form"]').find('div').first().find('h3').should('have.text','Your personal information')
        
        cy.get('form[id="account-creation_form"]').within(() => {
        
          cy.get('.clearfix').find('label').first().should('have.text','Title')
        
          cy.get('[type="radio"]').first().check()
        
          cy.get('input[id="customer_firstname"]').type('Mukesh')
        
          cy.get('input[id="customer_lastname"]').type('Adhikari')
        
          cy.get('input[id="email"]').should('have.value','bekojo6666669@dufeed.com')
        
          cy.get('input[id="passwd"]').type('Adhikari')
        
          cy.get('.form-group').eq(4).find('label').should('have.text','Date of Birth')
        
          cy.get('div[id="uniform-days"]').find('select').select('1').should('have.value','1')
        
          cy.get('div[id="uniform-months"]').find('select').select('1').should('have.value','1')
        
          cy.get('div[id="uniform-years"]').find('select').select('2020').should('have.value','2020')
        
          cy.get('input[id="firstname"]').should('have.value','Mukesh')
        
          cy.get('input[id="lastname"]').should('have.value','Adhikari')
        
          cy.get('input[id="company"]').type('Fusemachines')
        
          cy.get('input[id="address1"]').type('Kathmandu')
        
          cy.get('input[id="city"]').type('Kathmandu')
        
          cy.get('div[id="uniform-id_state"]').find('select').select('1').should('have.value','1')
        
          cy.get('input[id="postcode"]').type('44600')
        
          cy.get('input[id="phone_mobile"]').type('9810045698')
        
          cy.contains('Register').should('be.visible').click()
        
          cy.url().should('eq','http://automationpractice.com/index.php?controller=my-account')
        })
      })
})