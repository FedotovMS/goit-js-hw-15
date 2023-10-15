const input = document.querySelector("#validation-input");

input.addEventListener("input", handleInput);

function handleInput(e) {
  if (Number(input.dataset.length) === e.currentTarget.value.length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
