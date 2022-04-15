@footer
Feature: Footer component

Background: Open site and log in
    Given I open 'https://www.saucedemo.com/' url
    When I login as 'Standard' user
    Then I see 'Products' page url

@twitter
Scenario: Checking that Social network icons lead to appropriate links
    When I click 'Twitter link icon' on 'Products' page in 'Footer' component
    Then I see 'https://twitter.com/saucelabs' url

@facebook
Scenario: Checking that Social network icons lead to appropriate links
    When I click 'Facebook link icon' on 'Products' page in 'Footer' component
    Then I see 'https://www.facebook.com/saucelabs' url

@linkedin
Scenario: Checking that Social network icons lead to appropriate links
    When I click 'LinkedIn link icon' on 'Products' page in 'Footer' component 
    Then I see 'https://www.linkedin.com/company/sauce-labs/' url