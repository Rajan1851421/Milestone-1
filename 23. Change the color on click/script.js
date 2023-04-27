


const colors = ["pink", "orange", "blue", "saffron", "greenyellow", "limegreen"];

const chnageColor = document.getElementById("chnageColor");
chnageColor.addEventListener("click", function() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
