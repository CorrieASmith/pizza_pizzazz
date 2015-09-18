describe("Pizza", function() {
  it("receives pizza size and returns price of pizza", function() {
    var testPizza = new Pizza("small", false);
    expect(testPizza.pizzaPrice()).to.equal("$8.50");
  });

  it("charges $1.50 for extra toppings", function() {
    var testPizza = new Pizza("medium", true);
    expect(testPizza.pizzaPrice()).to.equal("$12.00");
  });
});
