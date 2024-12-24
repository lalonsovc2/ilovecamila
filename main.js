onload = () =>{
    document.body.classList.remove("container");
};

var drawingsContainer = document.querySelector("#drawings-container");
var drawingData = [
  { src: "img/drawing1.png", time: 11, position: "left" },
  { src: "img/drawing2.png", time: 19, position: "right" },
  { src: "img/drawing3.png", time: 27, position: "left" },
  { src: "img/drawing4.png", time: 35, position: "right" },
  { src: "img/drawing5.png", time: 43, position: "left" },
  { src: "img/drawing6.png", time: 51, position: "right" },
  { src: "img/drawing7.png", time: 59, position: "left" },
  { src: "img/drawing8.png", time: 67, position: "right" },
  { src: "img/drawing9.png", time: 75, position: "left" },
  { src: "img/drawing10.png", time: 83, position: "right" },
  { src: "img/drawing11.png", time: 91, position: "left" },
  { src: "img/drawing12.png", time: 99, position: "right" },
  { src: "img/drawing13.png", time: 107, position: "left" }
];

// Crear elementos de imagen
drawingData.forEach((drawing) => {
  var img = document.createElement("img");
  img.src = drawing.src;
  img.classList.add("drawing", drawing.position);
  drawingsContainer.appendChild(img);
  drawing.element = img; // Guarda la referencia del elemento
});

// Sincronizar imágenes con el audio
function updateDrawings() {
  var time = audio.currentTime;

  drawingData.forEach((drawing) => {
    if (time >= drawing.time && time < drawing.time + 6) {
      drawing.element.classList.add("visible");
    } else {
      drawing.element.classList.remove("visible");
    }
  });
}

// Escucha el evento `timeupdate`
audio.addEventListener("timeupdate", updateDrawings);
