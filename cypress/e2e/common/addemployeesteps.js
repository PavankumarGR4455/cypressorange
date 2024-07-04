import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps";
import Addemployee from "../../Pageobject/addemployee.po";

When('user click on PIM',() =>{

    cy.contains("PIM").click()
})
And('user click on add employee submenu',() =>{

    cy.contains('Add Employee').click()

})
And('user enter firstname {string} and lastname as {string}',(firstname,lastname) =>{

    cy.get(Addemployee.firstname()).type(firstname)
    cy.get(Addemployee.lastname()).type(lastname)

})
And('user click on save button',() =>{

    cy.get(Addemployee.savebtn()).click()
})
Then('user should get success message',() =>{

    cy.contains('Success').should('be.visible')
})
Then('user should get error message',() =>{

    cy.contains('Required').should('be.visible')
})

