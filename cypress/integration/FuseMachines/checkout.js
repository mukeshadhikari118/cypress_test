/// <reference types="cypress" />


describe('Checkout', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('http://automationpractice.com/index.php')
    })

    it('Checkout', () => {
        cy.title().should('eq', 'My Store')

        cy.contains('Sign in').click()

        cy.get('input[id="email"]').type('bekojo6799@dufeed.com')

        cy.get('input[id="passwd"]').type('login')

        cy.get('.submit').contains('Sign in').click()

        cy.url().should('eq','http://automationpractice.com/index.php?controller=my-account')

        cy.get('input[id="search_query_top"]').type('dress')

        cy.get('button').contains('Search').first().click({force : true})

        cy.get('ul.product_list').children().should('have.length', 7)

        cy.get('li.ajax_block_product').find('div').first().find('div').first().click()

        cy.get('button').contains('Add to cart').click()

        cy.get('a').filter('[title="Proceed to checkout"]').click({force : true})

        cy.get('a').filter('[title="Proceed to checkout"]').eq(1).click({force : true})

        cy.get('button').filter('[name="processAddress"]').click({force : true})

        cy.get('input#cgv').click()

        cy.get('button').filter('[name="processCarrier"]').click({force : true})

        cy.get('#cart_summary').find('tbody>tr').first().find('td').eq(2).find('span').should('have.text','In stock')

        cy.get('#cart_summary').find('tfoot>tr').last().find('td').last().find('span').should('have.text','$32.22')

        cy.get('a').filter('[title="Pay by bank wire"]').click({force : true})
        
        cy.get('button').contains('I confirm my order').click()



    })
})