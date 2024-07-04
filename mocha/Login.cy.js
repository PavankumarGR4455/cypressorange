describe('Login functionallity', () => {

  it('Verify login Valid Crediential ', () => {
    
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get('input[ name="username"]').type('Admin')

    cy.get('input[type="password"]').type("admin123")

    cy.get('button[type="submit"]').click()

    cy.url().should("eq",'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    //or
    
    cy.contains('Time at Work').should("be.visible")

    //or

    cy.contains('My Actions').should("be.visible")

    cy.contains('Dashboard').should("be.visible")
    


  })

  it('Verify login Valid username with invalid password ', () => {
    
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get('input[ name="username"]').type('Admin')

    cy.get('input[type="password"]').type("admi12h3")

    cy.get('button[type="submit"]').click()

    cy.contains('Invalid credentials').should("be.visible")

  })

  
  it('Verify login inValid username with valid password ', () => {
    
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get('input[ name="username"]').type('Adminn')

    cy.get('input[type="password"]').type("admin123")

    cy.get('button[type="submit"]').click()

    cy.contains('Invalid credentials').should("be.visible")

  })

  
  it('Verify login inValid username with invalid password ', () => {
    
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get('input[ name="username"]').type('Admlin')

    cy.get('input[type="password"]').type("admh3")

    cy.get('button[type="submit"]').click()

    cy.contains('Invalid credentials').should("be.visible")

  })
})

// describe('Login functionality',() =>{
//   it("verify valid login crediantials",() =>{

//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//     cy.get(' input[name="username"]').type("Admin")

//     cy.get('input[type="password"]').type("admin123")

//     cy.get('button[type="submit"]').click()

//     cy.contains('vishv Patel').click()

//     cy.contains('Logout').click()

  
//   })

// })