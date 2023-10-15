const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

function addElements(arr) {
  const markup = arr.map((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    return li;
  });
  list.append(...markup);
}
addElements(ingredients);
