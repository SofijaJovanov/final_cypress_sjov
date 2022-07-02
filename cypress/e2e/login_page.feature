Feature: I want to test log in to site

    Scenario Outline: Login with valid username

        Given I navigate to the site

        When I enter username '<username>' and I enter password '<password>'

        Then I am successfully logged

        Examples:
            | username             | password  |
            | user@phptravels.com  | demouser  |
            | agent@phptravels.com | demoagent |