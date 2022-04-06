describe("The Main page loads", () => {
  it("loads successfully", () => {
    cy.visit("http://127.0.0.1:5500/index.html")
  })
})

describe("Basic single-digit calculations", () => {
  it("can perform addition", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5500/index.html")

    //Act
    //click 9
    cy.get("[data-cy=nine]").click();
    //click +
    cy.get("[data-cy=plus]").click();
    //click 3
    cy.get("[data-cy=three]").click();
    //click =
    cy.get(".equal").click();

    //Assert
    cy.get(".display-bar").should("have.value", 12);
  })
  it("can perform subtraction", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5500/index.html")

    //Act
    //click 8
    cy.get("[data-cy=eight]").click();
    //click -
    cy.get("[data-cy=minus]").click();
    //click 5
    cy.get("[data-cy=five]").click();
    //click =
    cy.get(".equal").click();

    //Assert
    cy.get(".display-bar").should("have.value", 3);
  })
})