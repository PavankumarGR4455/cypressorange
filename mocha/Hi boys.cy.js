import login from "../../Pageobject/loginpage.po"


describe("Buzz module verifiction",() =>{



  it.only("verify user can do a posting in the website",() =>{

    cy.fixture('loginpage/login').then(function (data) {        // one way of loading the data 

      this.data= data;
    })

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get(login.usernameinput()).type('Admin')
   

    cy.get(login.passwordinput()).type('admin123')
   


    cy.get('button[type="submit"]').as('submitbutton')
    cy.get(login.loginbutton()).click()

    

    cy.url().should("eq",'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    cy.title().should('eq','Dashboard')

    cy.get('a[href="/web/index.php/buzz/viewBuzz"]>span').click()

    cy.get(`textarea[placeholder="What's on your mind?"]`).type("Hi boys Namasthe. Have a nice weekend",{delay:0})
    cy.reload()

    cy.get ('button[type="submit"]').click()
    

    
  

  })
})



