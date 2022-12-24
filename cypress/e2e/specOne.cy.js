describe("First cypress test", () => {
  it("Should visit the page", () => {
    cy.visit("http://localhost:3000");
    cy.contains("React app deployed to netlify with github actions ci/cd");
  });
});
