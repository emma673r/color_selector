const colorBox = document.querySelector(".colorbox");
const colorPicked = document.querySelector("input");

colorPicked.addEventListener("input", displayColorInColorBox);

function displayColorInColorBox() {
  console.log(`displayColorInColorBox`);
  colorBox.style.backgroundColor = colorPicked.value;
}
