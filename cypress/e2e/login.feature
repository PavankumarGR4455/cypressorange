Feature: Verify login functionality

        Verifing login with positive and negative tests

Scenario:Verify login with valid credentials

    Given user launch the application
    When  user enter username "Admin" and password as "admin123"
    And   user click on login button
    Then user should navigate to dashboard application


Scenario: Verify login with valid username and invalid password

    Given  user launch the application
    When user enter username "Admin" and password as "jfuhfudh"
    And  user click on login button
    Then user should get error login message 

Scenario: verify login with invalid username and valid password
    Given  user launch the application
    When user enter username "Adsmin" and password as "admin123"
    And  user click on login button
    Then user should get error login message

Scenario: verify login with invalid username and invalid password
    Given  user launch the application
    When user enter username "Adsmin" and password as "adminefd123"
    And  user click on login button
    Then user should get error login message



