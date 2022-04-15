Feature: Check price

@showbug
Scenario: Check Item total price

    Given I open 'https://www.saucedemo.com/' url
    When I login as 'Standard' user
    Then I see 'Products' page url
    When I click 'Bike light add to cart button' on 'Products' page
    Then I click 'Fleece jacket add to cart button' on 'Products' page
    And I click 'Cart icon' on 'Products' page in 'Header' component
    Then I see 'Cart' page url
    When I click 'Checkout button' on 'Cart' page
    Then I see 'Checkout information' page url
    When I enter random data 'random First Name' in 'Username field' input on 'Checkout information' page
    And I enter random data 'random Last Name' in 'Lastname field' input on 'Checkout information' page
    And I enter random data 'random Zipcode' in 'Zipcode field' input on 'Checkout information' page
    And I click 'Continue Button' on 'Checkout information' page 
    Then I see 'Checkout overview' page url
    And I compare 'Item total price' with 'Item total: $59.98' on 'Checkout overview' page