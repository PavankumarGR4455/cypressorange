describe('Alert',() => {

    it("iframe",() => {

        cy.visit("https://jqueryui.com/checkboxradio/")
        cy.get('iframe[class="demo-frame"]').then(($iframe) =>{
            let radio1  = $iframe.contents().find('label[for="radio-2"]')   
            cy.wrap(radio1).click( )
        })
    })


    it.only("cypress invoke", () => {
        cy.visit('https://www.cypress.io/')

        cy.get('a[target="_blank"]').invoke("removeAttr",'target')
        cy.get('a[href="https://on.cypress.io/installing-cypress"]').eq(0).click({force:true})
        cy.go('back')
        })

    it("Simple alext",() =>{

        cy.visit('https://testpages.herokuapp.com/styled/alerts/alert-test.html')

        cy.get('input[id="alertexamples"]').click()

        cy.on('window:alert',(alert) =>{

            expect(alert).to.equal('I am an alert box!')
            return true

        })
    })


    it("confirm alert",() =>{

        cy.visit('https://testpages.herokuapp.com/styled/alerts/alert-test.html')

        cy.get('input[value="Show confirm box"]').click()

        cy.on('window:confirm',(confirm) =>{

            expect(confirm).to.equal('I am a confirm alert')
            return true

            // expect(confirm).to.equal('I am a confirm alert')
            // return false                                         # To click on cancel button we use false condition
        })

    })

    it("prompt alert",() =>{

        // cy.visit('https://testpages.herokuapp.com/styled/alerts/alert-test.html')

        // cy.window().then(($win) => {

        //     cy.stub($win,'prompt').returns("Pavan")
        //     cy.get('#promptexample').click()              To click on Ok button

         cy.visit('https://testpages.herokuapp.com/styled/alerts/alert-test.html')

         cy.window().then(($win) => {

            cy.stub($win,'prompt').callsFake(() => null)         // callsFake(() => null)  To click on cancel
            cy.get('#promptexample').click() 

            cy.contains('About').scrollIntoView({ easing: 'linear' })
            cy.wait(3000)
            cy.scrollTo('center')


        })

    
    })  

})