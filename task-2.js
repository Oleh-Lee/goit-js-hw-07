"use strict";
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const add = function(arr) {
  arr.forEach(element => {
    const list = document.querySelector("ul#ingredients");
    const item = document.createElement("li");
    list.appendChild(item);
    item.insertAdjacentHTML('beforeend', element);
  });
};
add(ingredients);