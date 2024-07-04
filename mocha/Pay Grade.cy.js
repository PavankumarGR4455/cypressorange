import login_details from "../../fixtures/login_jobdetails.json"
import paygrade from "../../fixtures/pay_grade_name.json"

describe("Adding job title",() =>{

  it ("verify the job title whether it is added",() =>{

      cy.visit('/web/index.php/auth/login')


      cy.get('input[ name="username"]').type(login_details.username)

      cy.get('input[type="password"]').type(login_details.password)

      cy.get('button[type="submit"]').click()   // Login to dashboard


      // verifing whether it is displaying Dashboard with assert

      cy.url().should("eq",'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      // or
      cy.contains("My Actions").should('be.visible')

      cy.contains('Admin').click()

      cy.contains('Job').click()
      cy.contains('Pay Grades').click()

        // verifing whether it has enter to job page

      cy.contains('Pay Grades').should('be.visible')

      cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

      cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row > div > div > div > div:nth-child(2) > input').type(paygrade.job_title)

      cy.get('button[type="submit"]').click()

      //cy.contains("Success").should('be.visible')

      cy.get('button[class="oxd-button oxd-button--medium oxd-button--ghost"]').click()

      cy.url().should("eq",'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewPayGrades')

      cy.get('img[class="oxd-userdropdown-img"]').click()

      cy.contains('Logout').click()

      cy.url().should("eq",'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  })
})