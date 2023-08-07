describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("http://django-test.com:30001/index.html");
    cy.get('a', {timeout: 1000}).contains('We Love Socks!').should('be.visible')
});
