let burgerElement = document.getElementById('burger');

let burger = {
  breadTop: 1,
  lettuce: 1,
  sauces: ['mayonnaise', 'ketchup', 'mustard'],
  tomato: 2,
  meat: 1,
  breadBottom: 1
};

function add(howMany, ingredient) {
  if (howMany > 0) {
    for (let i = 1; i <= howMany; i++) {
      if (i === 1) {
        burgerElement.appendChild(ingredient);
      } else {
        let clonedIngredient = ingredient.cloneNode(true);
        burgerElement.appendChild(clonedIngredient);
      }
    }
  } else {
    document.write('The quantity of ingredients is lower than 1!');
  }
}

function makeBurger(order) {
  if (order.breadTop > 0) {
    // Create new <li> html element
    let breadTop = document.createElement('li');

    // Set a class for the html <li> (breadTop)
    breadTop.className = 'bread';

    // Call add to add the specific quantity of this ingredient
    add(order.breadTop, breadTop);
  }
}

makeBurger(burger);
