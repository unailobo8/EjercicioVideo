var i = 0;
var Videos = ["Rick.webm", "Sandstorm.mp4", "Spook.mp4"];
function Vplay() {
  var video = document.getElementById("video");
  video.play();
  document.getElementById("mButton").setAttribute("onclick", "Vpause()");
  document.getElementById("mButton").textContent = "pause";

  document.getElementById("video").setAttribute("onclick", "Vpause()");
}
function prev() {
  if (i != 0) {
    i = i - 1;
  }
  document.getElementById("video").src = `vid/${Videos[i]}`;
  var video = document.getElementById("video");
  video.play();
  document.getElementById("mButton").setAttribute("onclick", "Vpause()");
  document.getElementById("mButton").textContent = "pause";

  document.getElementById("video").setAttribute("onclick", "Vpause()");
}

function Vpause() {
  var video = document.getElementById("video");
  video.pause();

  document.getElementById("mButton").setAttribute("onclick", "Vplay()");
  document.getElementById("mButton").textContent = "play_arrow";

  document.getElementById("video").setAttribute("onclick", "Vplay()");
}

function next() {
  if (i != 2) {
    i = i + 1;
  }
  document.getElementById("video").src = `vid/${Videos[i]}`;
  var video = document.getElementById("video");
  video.play();
  document.getElementById("mButton").setAttribute("onclick", "Vpause()");
  document.getElementById("mButton").textContent = "pause";

  document.getElementById("video").setAttribute("onclick", "Vpause()");
}

function vUp() {
  var video = document.getElementById("video");
  video.volume += 0.1;
}

function vDown() {
  var video = document.getElementById("video");
  video.volume -= 0.1;
}

function fScreen() {
  document.getElementById("video").requestFullscreen();
}

function Out() {
  document.exitFullscreen();
}
