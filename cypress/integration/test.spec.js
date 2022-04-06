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
  it("can perform multiplication", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5500/index.html")

    //Act
    //click 6
    cy.get("[data-cy=six]").click();
    //click *
    cy.get("[data-cy=multiply]").click();
    //click 5
    cy.get("[data-cy=five]").click();
    //click =
    cy.get(".equal").click();

    //Assert
    cy.get(".display-bar").should("have.value", 30);
  })
  it("can perform division", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5500/index.html")

    //Act
    //click 8
    cy.get("[data-cy=eight]").click();
    //click ÷
    cy.get("[data-cy=divide]").click();
    //click 4
    cy.get("[data-cy=four]").click();
    //click =
    cy.get(".equal").click();

    //Assert
    cy.get(".display-bar").should("have.value", 2);
  })
  it("can perform percentage", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5500/index.html")

    //Act
    //click 8
    cy.get("[data-cy=eight]").click();
    //click %
    cy.get("[data-cy=percent]").click();
    //click 6
    cy.get("[data-cy=six]").click();
    //click =
    cy.get(".equal").click();

    //Assert
    cy.get(".display-bar").should("have.value", 0.48);
  })
  it("can change the sign of a number when doing operation", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5500/index.html")

    //Act
    //click 8
    cy.get("[data-cy=eight]").click();
    //click +/-
    cy.get(".change-sign").click();
    //click *
    cy.get("[data-cy=multiply]").click();
    //click 3
    cy.get("[data-cy=three]").click();
    //click =
    cy.get(".equal").click();

    //Assert
    cy.get(".display-bar").should("have.value", -24);
  })
})

describe("Multiple-digit and decimal calculations", () => {
  it("can perform addition", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5500/index.html")

    //Act
    //click 9
    cy.get("[data-cy=nine]").click();
    //click 8
     cy.get("[data-cy=eight]").click();
    //click +
    cy.get("[data-cy=plus]").click();
    //click 3
    cy.get("[data-cy=three]").click();
    //click 5
    cy.get("[data-cy=five]").click();
    //click =
    cy.get(".equal").click();

    //Assert
    cy.get(".display-bar").should("have.value", 133);
  })
  it("can perform subtraction", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5500/index.html")

    //Act
    //click 8
    cy.get("[data-cy=eight]").click();
    //click 5
    cy.get("[data-cy=five]").click();
    //click 6
    cy.get("[data-cy=six]").click();
    //click -
    cy.get("[data-cy=minus]").click();
     //click 8
     cy.get("[data-cy=eight]").click();
     //click 5
     cy.get("[data-cy=five]").click();
     //click 6
     cy.get("[data-cy=six]").click();
    //click =
    cy.get(".equal").click();

    //Assert
    cy.get(".display-bar").should("have.value", 0);
  })
  it("can perform multiplication", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5500/index.html")

    //Act
    //click 6
    cy.get("[data-cy=six]").click();
    //click 7
    cy.get("[data-cy=seven]").click();
    //click .
    cy.get(".decimal").click();
    //click 6
    cy.get("[data-cy=six]").click();
    //click *
    cy.get("[data-cy=multiply]").click();
     //click 2
     cy.get("[data-cy=two]").click();
     //click 0
     cy.get("[data-cy=zero]").click();
     //click .
     cy.get(".decimal").click();
     //click 5
     cy.get("[data-cy=five]").click();
    //click =
    cy.get(".equal").click();

    //Assert
    cy.get(".display-bar").should("have.value", 1385.8);
  })
  it("can perform division", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5500/index.html")

    //Act
    //click 8
    cy.get("[data-cy=eight]").click();
    //click 8
    cy.get("[data-cy=eight]").click();
    //click ÷
    cy.get("[data-cy=divide]").click();
    //click 4
    cy.get("[data-cy=four]").click();
    //click 4
    cy.get("[data-cy=four]").click();
    //click =
    cy.get(".equal").click();

    //Assert
    cy.get(".display-bar").should("have.value", 2);
  })
  it("can perform percentage", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5500/index.html")

    //Act
    //click 8
    cy.get("[data-cy=eight]").click();
    //click 0
    cy.get("[data-cy=zero]").click();
    //click .
    cy.get(".decimal").click();
    //click 5
    cy.get("[data-cy=five]").click();
    //click %
    cy.get("[data-cy=percent]").click();
    //click 6
    cy.get("[data-cy=six]").click();
    //click 0
    cy.get("[data-cy=zero]").click();
    //click =
    cy.get(".equal").click();

    //Assert
    cy.get(".display-bar").should("have.value", 48.300000000000004);
  })
  it("can change the sign of a number when doing operation", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5500/index.html")

    //Act
    //click 8
    cy.get("[data-cy=eight]").click();
    //click 8
    cy.get("[data-cy=eight]").click();
    //click +/-
    cy.get(".change-sign").click();
    //click *
    cy.get("[data-cy=multiply]").click();
    //click 3
    cy.get("[data-cy=three]").click();
    //click =
    cy.get(".equal").click();

    //Assert
    cy.get(".display-bar").should("have.value", -264);
  })
})

describe("clear-all and clear-one button tests", () => {
  it("can clear all digits when CA is pressed", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5500/index.html")

    //Act
    //click 9
    cy.get("[data-cy=nine]").click();
    //click +
    cy.get("[data-cy=plus]").click();
    //click 3
    cy.get("[data-cy=three]").click();
    //click CA
    cy.get(".clear-all").click();

    //Assert
    cy.get(".display-bar").should("have.value", "");
  })
  it("can clear one digit when C1 is pressed", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5500/index.html")

    //Act
    //click 9
    cy.get("[data-cy=nine]").click();
    //click +
    cy.get("[data-cy=plus]").click();
    //click 3
    cy.get("[data-cy=three]").click();
    //click C1
    cy.get(".clear-one").click();

    //Assert
    cy.get(".display-bar").should("have.value", "9+");
  })
})  

describe("decimal button tests", () => {
  it("only add decimal point to the last typed value", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5500/index.html")

    //Act
    //click 9
    cy.get("[data-cy=nine]").click();
    //click +
    cy.get("[data-cy=plus]").click();
    //click 3
    cy.get("[data-cy=three]").click();
    //click .
    cy.get(".decimal").click();
    //click 3
    cy.get("[data-cy=three]").click();
    //click =
    cy.get(".equal").click();

    //Assert
    cy.get(".display-bar").should("have.value", 12.3);
  })
  it("only adds one decimal point per number", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5500/index.html")

    //Act
    //click 9
    cy.get("[data-cy=nine]").click();
    //click .
    cy.get(".decimal").click();
    //click 3
    cy.get("[data-cy=three]").click();
    //click .
    cy.get(".decimal").click();
    //click +
    cy.get("[data-cy=plus]").click();
    //click 6
    cy.get("[data-cy=six]").click();
    //click .
    cy.get(".decimal").click();
    //click 6
    cy.get("[data-cy=six]").click();
    //click .
    cy.get(".decimal").click();
    //click =
    cy.get(".equal").click();

    //Assert
    cy.get(".display-bar").should("have.value", 15.9);
  })
})  