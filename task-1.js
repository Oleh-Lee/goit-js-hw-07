const items = document.querySelectorAll(".item");
console.log(`В списке ${items.length} категории`);

items.forEach(item => {
  console.log(`${item.firstElementChild.innerHTML}`);
  console.log(`${item.lastElementChild.children.length}`);
});

