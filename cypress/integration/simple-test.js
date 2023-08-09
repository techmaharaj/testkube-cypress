describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("http://django-test.com:30001/index.html");
    cy.visit("http://django-test.com:30001/index.html");
    cy.wait(5000);
    
    // Check if page loaded correctly based on the brand logo
    cy.get('img[src="img/logo.png"][alt="WeaveSocks logo"].hidden-xs').should('be.visible');
    cy.get('img[src="img/logo.png"]').should('have.attr', 'src').and('include', 'logo.png');
    cy.get('img[alt="WeaveSocks logo"]').should('have.attr', 'alt', 'WeaveSocks logo');
    
    // Login
    cy.get('#login a').click();

    // Wait for the modal dialog to become visible
    cy.get('#login-modal').should('be.visible');

    // Enter the username into the input field in the modal
    cy.get('#username-modal').click(); 
    cy.get('#username-modal').type('user'); 
      
    // Enter the username into the input field in the modal
    cy.get('#password-modal').click(); 
    cy.get('#password-modal').type('pass');

    // Click Login
    cy.get('.btn-primary').contains('Log in').click();
    
    cy.wait(5000);
    
    // Validate Login
    cy.get('#howdy a').should('be.visible').and('contain', 'Logged in as User Name');
    });
});
