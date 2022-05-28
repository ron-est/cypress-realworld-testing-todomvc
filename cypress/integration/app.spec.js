describe("React TodoMVC", () => {
    // Assigning todo strings to variables
    const TODO_ITEM_ONE = 'Buy Milk'
    const TODO_ITEM_TWO = 'Pay Rent'
    const TODO_ITEM_THREE = 'Pickup Dry Cleaning'

    beforeEach(() => {
        // Lets Cypress know what url to visit
        cy.visit("http://localhost:8888")
    })
    it("adds a single todo", () => {
        // Searches for the class .new-todo and enters a string as an input
        cy.get(".new-todo").type(`${TODO_ITEM_ONE}{enter}`)
        // cy.get(".new-todo").type("Pay Rent{enter}")
        
        // Can chain cy.type() functions together
        // cy.get(".new-todo").type("Buy Milk{enter}").type("Pay Rent{enter}")
        
        // Gettings all of the <li> child elements of the .todo-list element and returns an array of all child elements that it finds, which should be 1
        cy.get(".todo-list li").should("have.length", 1)

        // Checks if todo's name is within a <label> element
        // Gets all <li> elements
        // .eq() will grab the first element of the array
        // find() method will find the <label> element
        // .should checks that <label> contains the text of todo item
        cy.get(".todo-list li").eq(0).find("label").should("contain", TODO_ITEM_ONE)

    })
    
    it("adds three todos", () => {
        cy.get(".new-todo").type(`${TODO_ITEM_ONE}{enter}`)
        cy.get(".new-todo").type(`${TODO_ITEM_TWO}{enter}`)
        cy.get(".new-todo").type(`${TODO_ITEM_THREE}{enter}`)
        cy.get(".todo-list li").should("have.length", 3)
    })
})