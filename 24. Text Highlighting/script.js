const Paragraph = document.getElementById("Paragraph");
const words = Paragraph.innerText.split(" ");
console.log(words)



for (let i = 0; i < words.length; i++) {
  if (words[i].length > 8) {
    words[i] = "<span style='background-color: yellow;'>" + words[i] + "</span>";
  }
}
Paragraph.innerHTML = words.join(" ");


