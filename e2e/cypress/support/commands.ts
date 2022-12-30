/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable {
    dataCy(value: string): Chainable<JQuery<HTMLElement>>
    login(email: string, password: string): Chainable<void>
    loginAsSeller(): Chainable<void>
    loginAsBuyer(): Chainable<void>
    setSliderValue(value: number): Chainable<void>
  }
}

Cypress.Commands.add('dataCy', (value: string) => {
  return cy.get(`[data-cy=${value}]`)
})

Cypress.Commands.add('login', (email: string, password: string) => {
  cy.visit('/sign_in')
  cy.dataCy('sigin-in-email-text-field').type(email)
  cy.dataCy('sigin-in-password-text-field').type(password)
  cy.dataCy('sigin-submit').click()
  cy.dataCy('text-current-user-email').contains(email).should('exist')
})

Cypress.Commands.add('loginAsSeller', () => {
  cy.login('seller@example.com', '1234qwer')
})

Cypress.Commands.add('loginAsBuyer', () => {
  cy.login('buyer@example.com', '1234qwer')
})

Cypress.Commands.add('setSliderValue', { prevSubject: 'element' }, (subject, value) => {
  const element = subject[0]

  const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set

  nativeInputValueSetter?.call(element, value)
  element.dispatchEvent(new Event('input', { bubbles: true }))
})
