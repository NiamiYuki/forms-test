let authData = {};

function sendData() {
  const inputs = document.querySelectorAll(".reset__form_input");
  inputs.forEach((input) => {
    authData[input.name] = input.value;
  });

  const username = document.getElementById("username");
  const secret = document.getElementById("secret");
  const password = document.getElementById("password");
  const passwordTwo = document.getElementById("password_two");

  const arr = [
    {
      elem: username,
      hasError: username.value === "",
    },
    {
      elem: secret,
      hasError: secret.value === "",
    },
    {
      elem: password,
      hasError: password.value.length < 6,
    },
    {
      elem: passwordTwo,
      hasError: password.value != passwordTwo.value,
    },
  ];

  let hasErrors = false;

  for (let elem of arr) {
    if (elem.hasError) {
      elem.elem.parentElement.querySelector(".reset__form_warning").style.visibility = "visible";
      hasErrors = true;
    } else {
      elem.elem.parentElement.querySelector(".reset__form_warning").style.visibility = "hidden";
    }
  }

  if (hasErrors) {
    return;
  }

  console.log(authData);
}

function togglePassword(id, showId) {
  const passwordField = document.getElementById(id);
  const currentType = passwordField.type;
  const isShow = document.getElementById(showId);

  if (currentType === "password") {
    passwordField.type = "text";
    isShow.textContent = "скрыть";
  } else {
    passwordField.type = "password";
    isShow.textContent = "показать";
  }
}
