var inputbox = document.getElementById("inputbox");

function clearever() {
  inputbox.value = "";
}

function calcu(input) {
  inputbox.value += input;
}

function result() {
  try {
    inputbox.value = eval(inputbox.value);
  } catch (error) {
    inputbox.value = "Error";
  }
}

function Del() {
  inputbox.value = inputbox.value.slice(0, -1);
}
