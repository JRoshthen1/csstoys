const RGBcanvas = document.getElementById("color-picker");
const context = RGBcanvas.getContext("2d");

const image = context.createImageData(RGBcanvas.width, RGBcanvas.height);
const data = image.data;


let index = 0;
for (let y = 0; y < RGBcanvas.height; y++) {
  for (let x = 0; x < RGBcanvas.width; x++) {
    const red = x / RGBcanvas.width * 255;
    const green = y / RGBcanvas.height * 255;
    const blue = 128;

    data[index++] = red;
    data[index++] = green;
    data[index++] = blue;
    data[index++] = 255;
  }
}

RGBcanvas.addEventListener("click", (event) => {
  const x = event.offsetX;
  const y = event.offsetY;

  const red = (x / RGBcanvas.width) * 255;
  const green = (y / RGBcanvas.height) * 255;
  const blue = 128;
  rgb = `rgba(${red}, ${green}, ${blue}, 1)`;
  console.log(rgb);
  return rgb

});


context.putImageData(image, 0, 0);



