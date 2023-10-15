const refs = {
  spanEl: document.querySelector("#value"),
  decr: document.querySelector('[data-action="decrement"]'),
  incr: document.querySelector('[data-action="increment"]'),
};

let counterValue = 0;

function decrClick() {
  counterValue--;
  refs.spanEl.textContent = counterValue;
}
refs.decr.addEventListener("click", decrClick);

function incrClick() {
  counterValue++;
  refs.spanEl.textContent = counterValue;
}
refs.incr.addEventListener("click", incrClick);
