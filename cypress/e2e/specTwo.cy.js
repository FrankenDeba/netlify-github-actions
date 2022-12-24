describe("Testing welcome", () => {
  it("Should greet back", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Say thank you").click();
    cy.contains("You are welcome!");
  });
});
