const items = document.querySelectorAll(".item");
console.log(`В списке ${items.length} категории`);

items.forEach(item => {
  console.log(`${item.firstElementChild.innerHTML}`);
  console.log(`${item.lastElementChild.children.length}`);
});

 
//elem.firstElementChild - выберет первый дочерний 
//узел-элемент внутри elem.

//elem.children - псевдо-массив хранит только дочерние узлы-элементы,
// то есть соответствующие тегам.

//elem.innerHTML — свойство, позволяет получить содержимое элемента, 
//включая теги, в виде строки.
