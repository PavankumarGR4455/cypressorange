describe("Testsuit",() => {
    it("Links ",() =>{

        cy.visit('https://trello.com/')
        cy.get('a[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]').click()

        cy.origin('https://id.atlassian.com/login',() =>{     // Navigate to New URL page.

            cy.get('#username').type('Pavankumargr4455@gmail.com')
            cy.get('#login-submit').click()
            cy.get('#password').clear().type("Pavankumar")
            cy.get('#login-submit').click()
            cy.contains('Incorrect email address and / or password.').should('be.visible')    // wrong password assertion

            cy.go(-1)

        })

    })
})