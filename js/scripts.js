function Pizza(pizzaSize, extraToppings) {
this.pizzaSize = pizzaSize;
this.extraToppings = extraToppings;
// this.howMany = howMany;
}

Pizza.prototype.pizzaPrice = function() {
  if (this.pizzaSize === "small" && this.extraToppings === false) {
    return "$8.50";
  } else if (this.pizzaSize === "medium" && this.extraToppings === false) {
    return "$10.50";
  } else if (this.pizzaSize === "large" && this.extraToppings === false) {
    return "$12.50";
  }

  if (this.extraToppings === true && this.pizzaSize === "small") {
    return "$10.00";
  } else if (this.extraToppings === true && this.pizzaSize === "medium") {
    return "$12.00";
  } else if (this.extraToppings === true && this.pizzaSize === "large") {
    return "$14.00";
  }

  // if (this.howMany === 2 && this.pizzaSize === "large" && this.extraToppings === false) {
  //   return "$28.00";
  // } else if (this.howMany === 2 && this.pizzaSize === "medium" && this.extraToppings === false) {
  //   return "$24.00";
  // } else if (this.howMany === 2 && this.pizzaSize === "small" && this.extraToppings === false) {
  //   return "$20.00";
  // }
};

function resetSelect() {
  $("select#pizzaName").val("");
  $("select#pizzaTopping").val("");
  $("select#pizzaSize").val("");

}

$(document).ready(function() {
  $("form#pizzaType").submit(function(event){
      event.preventDefault();

      var selectedPizza = $("select#pizzaName").val();
      var selectedToppings = $("select#pizzaTopping").val();
      var selectedSize = $("select#pizzaSize").val();
      var extraToppings = false;

      if (selectedToppings === "All of the above") {
        extraToppings = true;
      }

      var newPizza = new Pizza(selectedSize, extraToppings);
      var pizzaPrice = newPizza.pizzaPrice();

      resetSelect();

      $(".selectedSize").text(selectedSize);
      $(".selectedPizza").text(selectedPizza);
      $(".selectedToppings").text(selectedToppings);
      $(".pizzaPrice").text(pizzaPrice);

      $("#result").show();
  });
});
