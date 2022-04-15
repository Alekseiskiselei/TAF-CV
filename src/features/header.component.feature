@header
Feature: Header component

Background: Open site and log in
    Given I open 'https://www.saucedemo.com/' url
    When I login as 'Standard' user
    Then I see 'Products' page url

@cart
Scenario: Opening shopping cart
    When I click 'Cart icon' on 'Products' page in 'Header' component
    Then I see 'Cart' page url

@menu
Scenario: Opening burger menu
    When I click 'Burger-menu button' on 'Products' page in 'Header' component
    Then I see 'Side menu' element on 'Products' page in 'Menu' component