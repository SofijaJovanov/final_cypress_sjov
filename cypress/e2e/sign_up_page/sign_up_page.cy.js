import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I navigate to the signup page", () => {
  cy.visit("/");
  cy.get(
    '[class="btn btn-outline-primary btn-block form-group effect ladda-sm ladda-button waves-effect"]'
  ).click();
});

When(
  "I enter first name {string} and I enter last name {string} and I enter phone {string} and I enter e-mail {string} and I enter password {string}",
  (fname, lname, phone, email, password) => {
    cy.signUp(fname, lname, phone, email, password);
  }
);

Then("I successfully created two customer accounts", () => {});
