describe("Form Interaction", () => {
  it("Altera o valor do imput para 25", () => {
    cy.visit("index.html");
    cy.get("input").invoke("val", 25).trigger("change");
    cy.get("p").should("have.text", "25");
  });
});
