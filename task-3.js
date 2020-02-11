const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  }
];

const gallery = document.getElementById('gallery');
const listItem = images.reduce((acc, image) => {
  return acc +=`<li>
  <img src="${image.url}", alt=${image.alt}></li>`
}, '');
gallery.insertAdjacentHTML('beforeend', listItem);
// gallery.append(listItem)//вернет строку
// const list = document.querySelector("ul#gallery");

// const add = function(arr) {
//   arr.forEach(elem => {
//     const item = document.createElement("li");
//     list.appendChild(item);
//     item.insertAdjacentHTML(
//       "afterbegin",
//       `<img src=${elem.url}, alt=${elem.alt}>`
//     );
//   });
// };

// add(images)

////element.insertAdjacentHTML(position, string) Метод парсит
// указанную строку как HTML и добавляет результирующие узлы
// в указанное место DOM-дерева.




