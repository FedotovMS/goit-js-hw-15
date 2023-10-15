const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", handleInput);

function handleInput(e) {
  console.log(e.currentTarget.value);
  return !e.currentTarget.value.trim()
    ? (refs.span.textContent = "Anonymous")
    : (refs.span.textContent = e.currentTarget.value);
}
