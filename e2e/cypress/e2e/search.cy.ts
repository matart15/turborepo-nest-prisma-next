describe('検索のテスト', () => {
  beforeEach(() => {
    cy.loginAsSeller()
    // cy.visit('/events')
    // cy.dataCy('ticket-list-link').first().click()
  })

  it('ログイン成功の仮のテスト（TODO: 削除する）', () => {
    cy.dataCy('text-current-user-email').contains('seller@example.com').should('exist')
  })

  it.skip('チケット検索(チケット枚数でフィルター)', () => {
    cy.dataCy('number-button').eq(1).click()
    cy.contains('Number of tickets').should('exist')
    cy.dataCy('number-button').first().click()
    cy.dataCy('submit-filter-button').click()
    cy.dataCy('ticket-info').should('have.length', 1)
  })

  it.skip('チケット検索(チケットの金額でフィルター)', () => {
    cy.dataCy('number-button').eq(0).click()
    cy.dataCy('number-button').eq(1).click()
    cy.dataCy('number-button').eq(2).click()
    cy.get('input[aria-labelledby="range-slider').first().setSliderValue(25)
    cy.get('input[aria-labelledby="range-slider').last().setSliderValue(100)
    cy.dataCy('submit-filter-button').click()
    cy.dataCy('ticket-info').should('have.length', 1)
    cy.dataCy('ticket-priceForCell').each($row => {
      cy.wrap($row)
        .invoke('text')
        .then(parseInt)
        .then($value => {
          expect($value).to.be.within(25, 100)
        })
    })
  })

  it.skip('チケットのソート(値段)', () => {
    cy.dataCy('number-button').eq(0).click()
    cy.dataCy('number-button').eq(1).click()
    cy.dataCy('number-button').eq(2).click()
    cy.get('[type="radio').first().check()
    cy.dataCy('submit-filter-button').click()
    cy.dataCy('ticket-priceForCell')
      .first()
      .invoke('text')
      .then(parseInt)
      .then($firstValue => {
        cy.dataCy('ticket-priceForCell')
          .last()
          .invoke('text')
          .then(parseInt)
          .then($lastValue => {
            expect($lastValue).to.above($firstValue)
          })
      })
  })
})
