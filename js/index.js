// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushroom) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((greenPepper) => {
    if (state.greenPepper) {
      greenPepper.style.visibility = 'visible';
    } else {
      greenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  let sauce = document.querySelector('.sauce');
  if (!state.whiteSauce) {
    sauce.classList.remove('sauce-white');
  } else {
    sauce.classList.add('sauce-white');
  }
}
function renderGlutenFreeCrust() {
  let crust = document.querySelector('.crust');
  if (!state.glutenFreeCrust) {
    crust.classList.remove('crust-gluten-free');
  } else {
    crust.classList.add('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushroom = !state.mushroom;
    renderEverything();
  });

document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPepper = !state.greenPepper;
    renderEverything();
  });

document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});

function renderButtons() {
  // let button = function() {}
  let buttonClass = document.querySelector('.btn');
  console.log(buttonClass);

  // if(buttonClass.className = "active") {buttonClass.classList.remove('active')
  // }
  // for (const i in state) {
  //   console.log(`${i}`);} // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  /*
  check if it's in use if yes then active if not then not active!!!!
  */
  document.querySelector('.btn').addEventListener('click', function () {
    if (!state) {
      return document.querySelector('.btn')[0].remove.classList('active');
    } else if (state) {
      return document.querySelector('.btn')[0].add.classList('active');
    }
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}
