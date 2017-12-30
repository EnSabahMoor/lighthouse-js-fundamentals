var ingredients = ["eggs", "milk", "flour", "sugar", "backing soda", "baking powder", "chocolate chips", "bananas"];

// A while loop that prints out the contents of ingredients
var x = 0;
while (x < ingredients.length) {
  console.log(ingredients[x])
  x++;
}


// A for loop that prints out the contents of ingredients
for (x = 0; x < ingredients.length; x++) {
console.log(ingredients[x]);
}

// Any loop (while or for) that prints out the contents of the ingredients backwards

for (var x = ingredients.length -1; x >=0; x--) {
console.log(ingredients[x]);
}
