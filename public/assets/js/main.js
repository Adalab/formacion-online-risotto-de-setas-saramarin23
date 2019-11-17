"use strict";

// app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css")); // redirect CSS bootstrap

let title = document.querySelector(".recipe-title");
const data = "../../service/data.json";
let shipping = 7;

function fetchData() {
  const shippingCost = document.querySelector(".shipping-costs");
  fetch(data)
    .then(response => response.json())
    .then(data => {
      title.innerHTML = data.name;
      let products = document.querySelector(".products-list");
      let items = document.querySelector(".total-items");
      let subtotal = document.querySelector(".subtotal");
      //   let shippingCost = document.querySelector(".shipping-costs");
      let total = document.querySelector(".total");
      let buy = document.querySelector(".buy-btn");

      let ingredientItem = "";
      for (const ingredient of data.ingredients) {
        ingredientItem += `<li class="list-group-item list-item">
        <input class="form-check-input position-static" type="checkbox" checked>
        </input>
        <input type="number" class="input-quantity quantity" value=${
          ingredient.items
        } min="1"></input>
        <div class="ingredient-container">
            <p class="product">${ingredient.product}</p>
            <p class="product-brand">${ingredient.brand || "Sin marca"} </p>
            <span class="product-quantity">${ingredient.quantity}</span>
        </div>
        <p class="product-price">${ingredient.price *
          ingredient.items} €</p></li>`;
      }
      products.innerHTML = ingredientItem;
      //   subtotal.innerHTML;
      shippingCost.innerHTML += `<p> ${shipping} ${data.currency}</p>`;
      // total.innerHTML += `<p>${shippingCost.lastElementChild.innerHTML}</p>`;
      buy.innerHTML += shipping + data.currency;
    });
}

window.addEventListener("load", fetchData);

//# sourceMappingURL=main.js.map
