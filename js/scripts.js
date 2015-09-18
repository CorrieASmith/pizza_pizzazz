function Pizza(pizzaSize) {
  this.pizzaSize = pizzaSize;
}

Pizza.prototype.pizzaPrice = function() {
  if (this.pizzaSize === "small") {
    return "$8.50";
  } else if (this.pizzaSize === "medium") {
    return "$10.50";
  } else if (this.pizzaSize === "large"){
    return "$12.50";
  }

};
