function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('input[type="number"]'),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = Number(refs.input.value);
  let boxSize = 30;
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    boxSize += 10;
  }

  refs.boxes.append(...boxes);
}

function destroyBoxes() {
  return (refs.boxes.innerHTML = "");
}
