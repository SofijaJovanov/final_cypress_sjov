/// <reference types = "Cypress" />

import { customer } from "../../fixtures/login_details/login_details.json";
import { button_selectors } from "../../fixtures/selectors/button_selectors";
import { input_selectors } from "../../fixtures/selectors/input_selectors";

describe("Main page test set", function () {
  this.beforeEach("Before every test", function () {
    cy.visit("/");
    cy.get('[class="font-size-14"]').should(
      "have.text",
      "Please enter your account credentials below"
    );
    cy.login(customer.username, customer.password);
    cy.get('[class="dashboard-bread"]').should(
      "have.css",
      "background-color",
      "rgb(16, 98, 254)"
    );
  });

  it("1.Test sidebar menu list", function () {
    cy.get(button_selectors.DASHBOARD).click();
    cy.get('h3[class="title"]').should("have.text", "Recent Searches");
    cy.get(button_selectors.MY_BOOKINGS).click();
    cy.get('[class="title"]').should("have.text", "My Bookings");
    cy.get(button_selectors.ADD_FUNDS).click();
    cy.get('[class="title"]').should("have.text", "Add FundsPayment Method");
    cy.get(button_selectors.MY_PROFILE).click();
    cy.get('[class="title"]').should("have.text", "Profile Information");
    cy.get(button_selectors.LOGOUT).click();
    cy.get('[class="font-size-14"]').should(
      "have.text",
      "Please enter your account credentials below"
    );
  });

  it("2.Test add funds", function () {
    const money = 100;
    cy.get(button_selectors.ADD_FUNDS).click();
    cy.get('[class="title"]').should("have.text", "Add FundsPayment Method");
    cy.get('[name="price"]').clear();
    cy.get('[name="price"]').type(money);
    cy.get('[type="submit"]').click();
    cy.url().should("eq", "https://www.phptravels.net/payment/bank-transfer");
    cy.get('[class="card-header"]').should("contain", money);
    cy.get('[class="btn-front"]').should(
      "have.css",
      "background-color",
      "rgb(255, 72, 18)"
    );
    cy.get('[class="btn-front"]').click();
    cy.get('[class="yes"]').click();
    cy.get('[class="title"]').should("have.text", "Add FundsPayment Method");
    cy.get(button_selectors.LOGOUT).click();
    cy.get('[class="font-size-14"]').should(
      "have.text",
      "Please enter your account credentials below"
    );
  });

  it.only("3.Test profile information change", function () {
    const user_name = "AlexFil";
    cy.get(button_selectors.MY_PROFILE).click();
    cy.get('[class="title"]').should("have.text", "Profile Information");
    cy.get(input_selectors.FNAME).clear().type(user_name);
    cy.get('[type="submit"]').click();
    cy.get('[class="alert alert-success"]').should(
      "have.text",
      "\n                                    Profile updated successfully.                                "
    );
    cy.get('[class="alert alert-success"]').should(
      "have.css",
      "background-color",
      "rgb(209, 231, 221)"
    );
    cy.get(button_selectors.ADD_FUNDS).click();
    cy.get(button_selectors.MY_PROFILE).click();
    cy.get(input_selectors.FNAME).should("have.value", user_name);
    cy.get(input_selectors.FNAME).clear().type("User");
    cy.get('[class="btn-box mt-4"]').click();
  });

  it("4.Test header area - click all buttons at once", function () {
    cy.get('[class="main-menu-content"]')
      .children()
      .then((item) => {
        for (let i = 0; i < item.length; i++) {
          cy.get('[class="main-menu-content"] nav ul li a').as("menu_content");
        }
      });
    return cy.get("@menu_content").click({ multiple: true, force: true });
  });

  it("5.Search hotels", function () {
    cy.get('a[href="https://www.phptravels.net/hotels"]').click();
    cy.get('h2[class="text-center"]').should(
      "have.text",
      "SEARCH FOR BEST HOTELS"
    );
    cy.get('[class="selection"]').type("Belg");
    cy.get('[data-select2-id="13"]').each(($el, index, $list) => {
      if ($el.text() === "Belgrade,Serbia") {
        cy.wrap($el).click();
      }
    });
    cy.get('[id="submit"]').click();
    cy.get('[class="sec__title_list"]').should(
      "have.text",
      "Search Hotels in belgrade"
    );
  });
});
