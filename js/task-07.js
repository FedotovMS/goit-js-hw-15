const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

refs.input.addEventListener("input", handleInput);

refs.input.value = refs.input.min; //set control's default value

function handleInput(e) {
  console.log(e.currentTarget.value);
  return (refs.span.style.fontSize = `${e.currentTarget.value}px`);
}
