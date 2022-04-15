@login
Feature: Login page

Scenario: I Login user
    Given  I open 'https://www.saucedemo.com/' url
    When  I login as 'Standard' user
    Then  I see 'Products' page url