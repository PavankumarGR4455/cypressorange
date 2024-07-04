import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps";
import login from "../../Pageobject/loginpage.po"

Given("user launch the application",() =>{
    cy.visit("/web/index.php/auth/login")
})
When('user enter username {string} and password as {string}',(username,password) =>{

    cy.get(login.usernameinput()).type(username)
    cy.get(login.passwordinput()).type(password)

})
And('user click on login button',() =>{

    cy.get(login.loginbutton()).click()
})
Then('user should navigate to dashboard application',() =>{

    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})
Then('user should get error login message',() =>{

    cy.contains(login.loginerror).should('be.visible')
})