let head = document.head;
let style = document.createElement("style");
head.appendChild(style);

let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let directionSelector = document.getElementById("gradientRange");

color1.addEventListener("input", updateGradient);
color2.addEventListener("input", updateGradient);
directionSelector.addEventListener("input", updateGradient);
function updateGradient() {
  let background = `
    body {
      background: linear-gradient(${directionSelector.value}deg,
      ${color1.value},
      ${color2.value});
    }`
    //display the color values next to the picker 
    document.getElementById("labelColor1").innerHTML = color1.value;
    document.getElementById("labelColor2").innerHTML = color2.value;
    //set the bg style to header style tag created on top of this script
    style.innerHTML = background;
    //display the css output
    document.getElementById("gradientCssOutput").innerHTML = background

}
window.onload = updateGradient();
