function Pizza(pizzaSize, extraToppings) {
this.pizzaSize = pizzaSize;
this.extraToppings = extraToppings;
}

Pizza.prototype.pizzaPrice = function() {
  if (this.pizzaSize === "small" && this.extraToppings === false) {
    return "$8.50";
  } else if (this.pizzaSize === "medium" && this.extraToppings === false) {
    return "$10.50";
  } else if (this.pizzaSize === "large" && this.extraToppings === false){
    return "$12.50";
  }

  if (this.extraToppings === true && this.pizzaSize === "small") {
    return "$10.00";
  } else if (this.extraToppings === true && this.pizzaSize === "medium") {
    return "$12.00";
  } else if (this.extraToppings === true && this.pizzaSize === "large") {
    return "$14.00";
  }
};
