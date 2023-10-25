describe('Elemento Select', () => {
    beforeEach(() => {
        cy.visit('index.html')
    })

    it('define estado como Nevada', () => {
        cy.get('#meu-estado').select('Nevada')
        cy.get('#meu-estado').should('have.value','NV')
    })

    
    it('multiplos valores', () => {
        cy.get('#meus-estados').select(['MA', 'NV', 'HI'])
        cy.get('#meus-estados').invoke('val')
        .should('deep.equal', ['HI', 'NV','MA' ])
    })
})