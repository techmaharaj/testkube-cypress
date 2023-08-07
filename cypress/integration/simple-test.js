describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("http://django-test.com:30001/index.html");

    cy.contains(
      "We Love Socks!"
    ).should("be.visible");

    cy.contains(
      "Best Prices"
    ).should("be.visible");
  });
});
