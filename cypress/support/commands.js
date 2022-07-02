// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (username, password) => {
  cy.get('[placeholder="Email"]').type(username);
  cy.get('[placeholder="Password"]').type(password);
  cy.get(
    '[class="btn btn-default btn-lg btn-block effect ladda-button waves-effect"]'
  ).click();
});

Cypress.Commands.add("signUp", (fname, lname, phone, email, password) => {
  cy.get('[placeholder="First Name"]').type(fname);
  cy.get('[placeholder="Last Name"]').type(lname);
  cy.get('[placeholder="Phone"]').type(phone);
  cy.get('[placeholder="Email"]').type(email);
  cy.get('[placeholder="Password"]').type(password);
  cy.get(
    '[class="btn btn-default btn-lg btn-block effect ladda-button waves-effect"]'
  ).click();
});
