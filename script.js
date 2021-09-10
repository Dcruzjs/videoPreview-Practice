const video = document.querySelector("video");
video.addEventListener("mouseover", mouseOver);
video.addEventListener("mouseout", mouseOut);

function mouseOver() {
  video.muted = true;
  video.play();
}

function mouseOut() {
  console.log("out");
  video.pause();
}
