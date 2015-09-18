describe("Pizza", function() {
  it("creates a new pizza", function () {
    var testPizza = new Pizza("small", "1", "1");
    expect(testPizza.pizzaSize).to.equal("small");
    expect(testPizza.extraToppings).to.equal("1");
    // expect(testPizza.howMany).to.equal("1");
  });

  it("receives pizza size and returns price of pizza", function() {
    var testPizza = new Pizza("small", false);
    expect(testPizza.pizzaPrice()).to.equal("$8.50");
  });

  it("allows the user to choose one topping for free", function() {
    var testPizza = new Pizza("small", false);
    expect(testPizza.pizzaPrice()).to.equal("$8.50");
  });

  it("charges $1.50 for extra toppings", function() {
    var testPizza = new Pizza("medium", true);
    expect(testPizza.pizzaPrice()).to.equal("$12.00");
  });

  // it("receives pizza quantity and returns price of pizza", function() {
  //   var testPizza = new Pizza("large", true);
  //   expect(testPizza.pizzaPrice()).to.equal("$28.00");
  // });
});
