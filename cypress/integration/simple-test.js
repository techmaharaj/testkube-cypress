describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("http://django-test.com:30001/index.html");
    cy.wait(10000);
    cy.get('img[src="img/logo.png"][alt="WeaveSocks logo"].hidden-xs').should('be.visible');
    cy.get('img[src="img/logo.png"]').should('have.attr', 'src').and('include', 'logo.png');
    cy.get('img[alt="WeaveSocks logo"]').should('have.attr', 'alt', 'WeaveSocks logo');
    });
});
