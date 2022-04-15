@sidebarmenu
Feature: Menu component

Background: Open site, log in, open burger menu
    Given I open 'https://www.saucedemo.com/' url
    When I login as 'Standard' user
    Then I see 'Products' page url
    When I click 'Burger-menu button' on 'Products' page in 'Header' component
    Then I see 'Side menu' element on 'Products' page in 'Menu' component

@allitems
Scenario: Clicking 'ALL ITEMS' in sidebar menu
    When I click 'All items' on 'Products' page in 'Menu' component
    Then I see 'Products' page url

@about
Scenario: Clicking 'ABOUT' in sidebar menu
    When I click 'About' on 'Products' page in 'Menu' component
    Then I see 'https://saucelabs.com/' url

@logout
Scenario: Clicking 'LOGOUT' in sidebar menu
    When I click 'Logout' on 'Products' page in 'Menu' component
    Then I see 'Login' page url

@resetappstate
Scenario: Clicking 'RESET APP STATE' in sidebar menu
    When I click 'Reset app state' on 'Products' page in 'Menu' component
    Then I don't see 'Cart badge' element on 'Products' page in 'Header' component

@closesidebar
Scenario: Closing sidebar menu
    When I click 'Close side bar button' on 'Products' page in 'Menu' component
    Then I don't see 'Side menu' element on 'Products' page in 'Menu' component