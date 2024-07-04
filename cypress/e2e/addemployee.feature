Feature: verifing add employee functionality

    verifiy add employee with positive and negative test cases

    Background: Navigate to Addemployee page

    #  Just like before-each in mocha ,wil run before every testcase.

        Given  user launch the application
        When user enter username "Admin" and password as "admin123"
        And  user click on login button                                     
        Then user should navigate to dashboard application
        When  user click on PIM
        And user click on add employee submenu

    Scenario Outline: verify add employee with mandatory details


        And user enter firstname "<firstname>" and lastname as "<lastname>"
        And user click on save button
        Then user should get success message

        Examples:
            | firstname | lastname |
            | chethan   | P        |
            | raju      | G        |
            | Satwik    | Murthy   |

    Scenario: verify user can not add employee with madotory details


        And user click on save button
        Then user should get error message
