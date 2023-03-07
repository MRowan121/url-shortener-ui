describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {fixture: 'example'})
    cy.visit('http://localhost:3000/')
  })

  it('should have a title', () => {
    cy.get('header > h1')
    .should('be.visible')
  })

  it('should have an existing URL on display', () => {
    cy.get('#1')
    .should('be.visible')
  })

  it('should have a Form with inputs & a button', () => {
    cy.get('form').within(() => {
      cy.get('input[name="title"]')
      .should('be.visible')
      cy.get('input[name="urlToShorten"]')
      .should('be.visible')
      cy.get('button')
      .should('be.visible')
    })
  })

  it('should be able to type in the form', () => {
    cy.get('form').within(() => {
      cy.get('input[name="title"]')
        .type('My LinkedIn')
        .should('have.value', 'My LinkedIn')
      cy.get('input[name="urlToShorten"]')
        .type('https://www.linkedin.com/in/mrowan121/')
        .should('have.value', 'https://www.linkedin.com/in/mrowan121/')
    })
  })

  it('should display a new URL after submission', () => {
    cy.get('form').within(() => {
      cy.get('input[name="title"]')
        .type('My LinkedIn')
        .should('have.value', 'My LinkedIn')
      cy.get('input[name="urlToShorten"]')
        .type('https://www.linkedin.com/in/mrowan121/')
        .should('have.value', 'https://www.linkedin.com/in/mrowan121/')
      cy.get('button')
        .click()
    })
    cy.get('.urlContainer')
      .children()
      .should('have.length', 2)
  })

  it('should be able to delete a URL from the display', () => {
    cy.get('form').within(() => {
      cy.get('input[name="title"]')
        .type('My LinkedIn')
        .should('have.value', 'My LinkedIn')
      cy.get('input[name="urlToShorten"]')
        .type('https://www.linkedin.com/in/mrowan121/')
        .should('have.value', 'https://www.linkedin.com/in/mrowan121/')
      cy.get('button')
        .click()
    })
    cy.get('.urlContainer')
      .children()
      .last()
      .children()
      .last()
      .click()
    cy.get('.urlContainer')
      .children()
      .should('have.length', 1)
  })
})