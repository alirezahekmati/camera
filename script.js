let VIDEO = null;
let CANVAS = null;
let CONTEXT = null;

function main() {
  console.log("ss");
  CANVAS = document.getElementById("myCanvas");
  CONTEXT = CANVAS.getContext("2d");
  CANVAS.width = window.innerWidth;
  CANVAS.height = window.innerHeight;
  let promise = navigator.mediaDevices.getUserMedia({
    video: true,
  });

  promise
    .then(function (signal) {
      VIDEO = document.createElement("video");
      VIDEO.srcObject = signal;
      VIDEO.play();
      VIDEO.onloadeddata = function () {
        updateCanvas();
      };
    })
    .catch(function (err) {
      alert("there is an error: " + err);
    });
}

function updateCanvas() {
  CONTEXT.drawImage(VIDEO, 0, 0, 1300, 1100);
  window.requestAnimationFrame(updateCanvas);
}
