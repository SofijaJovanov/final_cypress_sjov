Feature: Go to sign up page to create credentials for two customer users

    Scenario Outline: I want to create credentials for two customers to be able to signup

        Given I navigate to the signup page

        When I enter first name '<fname>' and I enter last name '<lname>' and I enter phone '<phone>' and I enter e-mail '<email>' and I enter password '<password>'

        Then I successfully created two customer accounts

        Examples:
            | fname   | lname      | phone     | email                      | password    |
            | Penny   | Hofstadter | 021452569 | penny.hof@phptravels.com   | pennyh1user |
            | Leonard | Hofstadter | 021889899 | leonard.hof@phptravels.com | leo2user    |