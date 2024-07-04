
import logindetail from "../../fixtures/login_jobdetails.json"
import login from "../../Pageobject/loginpage.po"
import dashboardinfo from "../../Pageobject/dashboard.po"
import Addemployee from "../../Pageobject/addemployee.po"
import addemployeedetails from "../../fixtures/addemployee.json"

describe("Orangewebsite",() =>{
   
    
    it.only("Login to Dashboard",() =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get(login.usernameinput()).clear().type(logindetail.username)
        cy.get(login.passwordinput()).clear().type(logindetail.password)
        cy.get(login.loginbutton()).click()
        cy.reload()

        cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        //or
        cy.contains("Time at Work").should('be.visible')
       
        cy.contains(dashboardinfo.PIM()).click()
        // cy.get('input[type="checkbox"]').check(['0','2','4','6'],{force:true})
        // cy.wait(4000)
        // cy.get('input[type="checkbox"]').uncheck({force: true})
        // cy.get('a[role="menuitem"]').eq(2).click({force:true})
        // cy.get('i[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').eq(3).click()

        cy.xpath("//a[text() = 'Add Employee']").click()
        // let randomtext = (Math.random() + 1).toString(36).substring(7);
        cy.get(Addemployee.firstname()).type(addemployeedetails.firstname)
        // let randomtexts = (Math.random() + 1).toString(36).substring(7);

        cy.get(Addemployee.middlename()).type(addemployeedetails.middlename)
        cy.get(Addemployee.lastname()).type(addemployeedetails.lastname)

        
        const rand = Math.floor((Math.random()*1000000)+1);
        cy.get('input[class="oxd-input oxd-input--active"]').eq(1).clear().type(rand)
        cy.get('input[type="checkbox"]').check({force: true})

        let randomtex = (Math.random() + 1).toString(36).substring(7);
        cy.get('input[class="oxd-input oxd-input--active"]').eq(2).type(addemployeedetails.username+randomtex)
        cy.get('input[type="password"]').eq(0).clear().type('Chilli4455@')
        cy.wait(4000)
        cy.contains("Strong ").should('be.visible')
        cy.get('input[type="password"]').eq(1).clear().type("Chilli4455@")
        cy.get('button[type="submit"]').click()

        cy.contains('Personal Details').should('be.visible')



        
    

 





    })

    it("Greencart",() =>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.xpath("//button[text()='ADD TO CART']").click({ multiple: true })

        for (let i=0;i<=6;i++){
            cy.get('div[class="product-action"]>button').eq(i).click()

        }

    })

    
        
})