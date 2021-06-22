var buttons = document.querySelectorAll("button");
let screenValue = "";
var screen = document.getElementById("screen");
for (button of buttons) {
  button.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log(buttonText);
    if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
