describe("testando links do menu", () => {
    it("verificar", () => {
        cy.visit('/index.html')
        cy.get('#users')
        .should("have.attr", "href").and('include', "users.html")
    })
})