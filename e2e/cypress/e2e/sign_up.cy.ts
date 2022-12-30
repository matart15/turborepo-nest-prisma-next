const date = new Date()
const timestampInMs = date.getTime()
const email = `test${timestampInMs}@example.com`
const password = '1234qwer'

describe('sign up', () => {
  beforeEach(() => {
    cy.viewport('iphone-xr')
  })

  it('can sign up when user not exists', () => {
    cy.visit('/sign_up')
    cy.dataCy('sign-up-welcome').should('be.visible')
    cy.dataCy('signup-in-email-text-field').type(email)
    cy.dataCy('signup-in-password-text-field').type(password)
    cy.dataCy('signup-submit').click()
    cy.url().should('equal', Cypress.config('baseUrl') + '/sign_up_complete')
  })
})
