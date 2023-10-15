const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

refs.input.addEventListener("input", handleInput);

function handleInput(e) {
  return (refs.span.style.fontSize = `${e.currentTarget.value}px`);
}
