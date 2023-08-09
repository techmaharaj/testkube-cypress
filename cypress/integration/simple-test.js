describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("http://django-test.com:30001/index.html");
    cy.wait(10000);
    cy.contains('We Love Socks!').should('be.visible');
    });
});
