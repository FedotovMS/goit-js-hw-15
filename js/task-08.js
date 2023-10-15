const form = document.querySelector(".login-form");

form.addEventListener("submit", handleForm);

function handleForm(e) {
  e.preventDefault();

  const formData = new FormData(form);

  const email = form.elements["email"];
  const password = form.elements["password"];

  if (!email.value || !password.value) {
    alert("Fill in all fields");
    return;
  }

  const data = {};

  formData.forEach((value, key) => {
    data[key] = value.trim();
  });

  console.log(data);

  form.reset();
}
