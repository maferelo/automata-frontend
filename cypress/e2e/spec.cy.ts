describe("Home Page", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("Go to notifications").click();
  });
});
