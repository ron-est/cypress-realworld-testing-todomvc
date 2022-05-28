describe("React TodoMVC", () => {
    it("adds a single todo", () => {
        // Lets Cypress know what url to visit
        cy.visit("http://localhost:8888")
        
        // Searches for the class .new-todo and enters a string as an input
        cy.get(".new-todo").type("Buy Milk{enter}")
        // cy.get(".new-todo").type("Pay Rent{enter}")

        // Can chain cy.type() functions together
        // cy.get(".new-todo").type("Buy Milk{enter}").type("Pay Rent{enter}")

        // Gettings all of the <li> child elements of the .todo-list element and returns an array of all child elements that it finds, which should be 1
        cy.get(".todo-list li").should("have.length", 1)
    })
})