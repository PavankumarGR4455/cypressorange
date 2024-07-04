//import logindetails from "../fixtures/login_jobdetails.json"

import addjobdetails from "../../fixtures/admin/addjobdetails.json"
import login from "../cypress/Pageobject/loginpage.po"

describe("Adding job title",() =>{

    it ("verify the job title whether it is added",() =>{

        cy.visit('/web/index.php/auth/login')

       // cy.get('input[ name="username"]').type(logindetails.username)    #using import statement we can access login details

       // cy.get('input[type="password"]').type(logindetails.password)     #using import statement we can access login details

       cy.get(login.usernameinput()).type(Cypress.env("username"))

       cy.get(login.passwordinput()).type(Cypress.env('password'))

        cy.get(login.loginbutton()).click()   // Login to dashboard

        // verifing whether it is displaying Dashboard with assert

        cy.url().should("eq",'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        // or
        cy.contains("My Actions").should('be.visible')

        cy.contains('Admin').click()
        cy.contains('Job').click()
        cy.contains('Job Titles').click()

        // verifing whether it has enter to job page

        cy.contains('Job Titles').should('be.visible')

        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

        // verifing the add job title
        cy.contains('Add Job Title').should('be.visible')
        let randomtext = (Math.random() + 1).toString(36).substring(7);

        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input').type(addjobdetails.jobtitle+randomtext)

        cy.get('textarea[placeholder="Type description here"]').type(addjobdetails.jobdescription)

        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space" ]').click()

        cy.contains('Success').should('be.visible')

        // checking the difference  in git new branch

        // checking whether job is saved and reurn back to title page.

        cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")

        cy.get('img[class="oxd-userdropdown-img"]').click()

        cy.contains('Logout').click()
  
        cy.url().should("eq",'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    } )
})