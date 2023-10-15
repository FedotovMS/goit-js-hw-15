function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  btn: document.querySelector(".change-color"),
  hexCode: document.querySelector(".color"),
  body: document.querySelector("body"),
};

refs.btn.addEventListener("click", onBtnClick);

function onBtnClick(e) {
  const color = getRandomHexColor();
  return (
    (refs.hexCode.textContent = color) &&
    (refs.body.style.backgroundColor = color)
  );
}
