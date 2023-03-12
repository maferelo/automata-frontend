describe("Home Page", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("Home").click();
  });
});
