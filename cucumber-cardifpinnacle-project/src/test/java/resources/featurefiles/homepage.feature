Feature:  Cardif Pinacle homepage features
  As a user I would like to check all tabs on Cardif Pinacle Homepage

  Scenario Outline: User should able to click on all tabs of Homepage
    Given user is on Homepage
    When I click on "<tab>"
    Then I should navigate to "<tab>" successfully
    Examples:
      | tab                   |
      | About us              |
      | Products              |
      | Careers               |
      | Partnership Solutions |
      | Customers             |
      | Affiliates            |
      | News                  |
      | Contact us            |
