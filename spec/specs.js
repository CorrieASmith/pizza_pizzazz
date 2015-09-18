describe("Pizza", function() {
  it("receives pizza size and returns price of pizza", function() {
    var testPizza = new Pizza("small", true);
    expect(testPizza.pizzaPrice()).to.equal("$8.50");
  });
});
