Feature: End-to-end application testing

@e2e
Scenario: perform realistic buying process by customer

    Given I open 'https://www.saucedemo.com/' url
    When I login as 'Standard' user
    Then I see 'Products' page url
    And I click 'Backpack add to cart button' on 'Products' page
    And I click 'Onesie add to cart button' on 'Products' page
    And I click 'Fleece jacket add to cart button' on 'Products' page
    When I click 'Cart icon' on 'Products' page in 'Header' component
    Then I see 'Cart' page url
    When I click 'Onesie remove button' on 'Cart' page in 'Cart item' component
    And I click 'Checkout button' on 'Cart' page 
    Then I see 'Checkout information' page url
    When I enter 'John' in 'Username field' input on 'Checkout information' page
    And I enter random data 'random Last Name' in 'Lastname field' input on 'Checkout information' page
    And I enter random data 'random Zipcode' in 'Zipcode field' input on 'Checkout information' page
    And I click 'Continue Button' on 'Checkout information' page 
    Then I see 'Checkout overview' page url
    When I click 'Finish button' on 'Checkout overview' page
    Then I see 'Checkout complete' page url 



