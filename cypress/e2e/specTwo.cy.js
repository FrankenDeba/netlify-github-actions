describe("Testing welcome", () => {
  it("Should greet back", () => {
    cy.visit("/");
    cy.contains("Say thank you").click();
    cy.contains("You are welcome!");
  });
});
