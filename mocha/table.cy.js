
import { describe } from "mocha";

describe("Table testing", () => {

    it.only('to get text in table', () => {

        cy.visit('https://money.rediff.com/indices')

        cy.xpath('//table[@class="dataTable"]/tbody/tr[4]').within(() => {   // verify value within that row /td

            cy.get('td').eq(4).then((ele) => {

                var value = ele.text()
                expect(value).to.equal('+0.09')
            })

            cy.get('td').find('a').should('contain.text','BSE 500')    // verifing text within that column
        })
    })

    it("Testing a count of table", () => {

        cy.visit('https://money.rediff.com/indices')
        cy.xpath('//table[@id="dataTable"]/tbody/tr[4]/td').should("have.length", 6)    // verifing the row and column

        cy.xpath('//table[@class="dataTable"]/tbody/tr[4]/td[4]').then((txt) => {     //checking the exect value of the position is equal or not

            var currentprice = txt.text()

            expect(currentprice).to.equal('+32.26')


        })
        

    })

    
})