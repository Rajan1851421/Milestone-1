window.addEventListener("scroll", function() {
  // Get the height of the entire page
  const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  // Calculate how far the user has scrolled
  const scrollDistance = window.scrollY;
  // Calculate the progress as a percentage
  const progress = (scrollDistance / pageHeight) * 100;
  console.log(progress)
  // Update the width of the progress bar
  document.getElementById("progress-bar").style.width = progress + "%";
})