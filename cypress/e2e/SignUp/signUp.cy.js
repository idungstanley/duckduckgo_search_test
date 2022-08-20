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
})