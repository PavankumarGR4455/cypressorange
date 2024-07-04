import { Given, Then, And } from "cypress-cucumber-preprocessor/steps";


Given('I open Google page', () => {
    cy.visit('https://www.google.co.in/')
})

Then(`I see {string} in the title`, (title) => {
    cy.title().should('include', title)

})

