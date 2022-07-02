import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I navigate to the site", () => {
  cy.visit("/");
  cy.get('[class="font-size-14"]').should(
    "have.text",
    "Please enter your account credentials below"
  );
});

When(
  "I enter username {string} and I enter password {string}",
  (username, password) => {
    cy.login(username, password);
  }
);

Then("I am successfully logged", () => {
  cy.get('h3[class="title"]').should("have.text", "Recent Searches");
  cy.get('[class="la la-power-off mr-2 text-color-6"]').click();
});
