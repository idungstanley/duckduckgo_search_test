///<reference types="cypress"/>
describe("Sign up", ()=>{
    beforeEach(()=>{
        cy.visit("/")
    })
    it("Visit webpage", ()=>{
        cy.url().should("eq", "https://growthtools.com/")    
    })
    it("Click on create Account", ()=>{
        cy.get('.styles__user-actions__btn-create-account__1204g').click()
        cy.url().should("eq", "https://growthtools.com/register")
    })
    it("Fill First sign Up step", ()=>{
        cy.get('.styles__user-actions__btn-create-account__1204g').click()
        cy.get('body').contains("Next").should("have.class","btn")
        cy.get(':nth-child(1) > .form-group > #search')
        .type("Stanley").should("have.value", "Stanley")
        cy.get(':nth-child(2) > .form-group > #search')
        .type("Sunday").should("have.value", "Sunday")
        cy.get('.selected-flag').click()
        cy.get('#country-listbox').select("Nigeria")
    })
})