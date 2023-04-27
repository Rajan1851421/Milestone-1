const Image = document.getElementById("Image");
let x = 0;
let y = 0;

function moveImage(event) {
  switch (event.keyCode) {
    case 37: // left arrow
      x -= 10;
      break;
    case 38: // up arrow
      y -= 10;
      break;
    case 39: // right arrow
      x += 10;
      break;
    case 40: // down arrow
      y += 10;
      break;
  }

  Image.style.left = x + "px";
  Image.style.top = y + "px";
}

document.addEventListener("keydown", moveImage);
