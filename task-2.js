"use strict";
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const list = document.getElementById("ingredients");
const items = ingredients.reduce(
  (acc, item) => (acc += `<li>${item}</li>`), "");

list.insertAdjacentHTML("beforeend", items);

// const add = function(arr) {
//   arr.forEach(element => {
//     // const list = document.querySelector("ul#ingredients");
//     const item = document.createElement("li");
//     list.appendChild(item);
//     item.insertAdjacentHTML('beforeend', element);
//   });
// };
// add(ingredients);

//document.createElement(tagName) Создает HTML-элемент
//по указаному имени тега и возвращает ссылку на
//него как результат своего выполнения.

//elem.append(nodes) - добавляет nodes в конец elem

//element.insertAdjacentHTML(position, string) Метод парсит
// указанную строку как HTML и добавляет результирующие узлы
// в указанное место DOM-дерева.
