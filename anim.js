// Selección de elementos
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
var titulo = document.querySelector(".titulo");
var flowers = document.querySelector(".flowers");

// Datos de las letras
var lyricsData = [
  { "text": "T'es la meilleure chose qui m'est arrivée", "time": 11.0 },
  { "text": "Mais aussi la pire chose qui m'est arrivée", "time": 13.8 },
  { "text": "Ce jour où je t'ai rencontrée, j'aurais peut-être préféré", "time": 16.0 },
  { "text": "Que ce jour ne soit jamais arrivé", "time": 19.5 },
  { "text": "La pire des bénédictions", "time": 22.0 },
  { "text": "La plus belle des malédictions", "time": 24.0 },
  { "text": "De toi, j'devrais m'éloigner", "time": 26.0 },
  { "text": "Mais comme dit le dicton :", "time": 28.0 },
  { "text": "Plutôt qu'être seul, mieux vaut être mal accompagné", "time": 29.5 },
  { "text": "Tu sais c'qu'on dit", "time": 32.8 },
  { "text": "Soit près d'tes amis les plus chers", "time": 36.0 },
  { "text": "Mais aussi", "time": 38.0 },
  { "text": "Encore plus près d'tes adversaires", "time": 41.0 },
  { "text": "Mais ma meilleure ennemie c'est toi", "time": 42.8 },
  { "text": "Fuis-moi, le pire c'est toi et moi", "time": 46.2 },
  { "text": "Mais si tu cherches encore ma voix", "time": 54.0 },
  { "text": "Oublie-moi, le pire c'est toi et moi", "time": 57.0 },
  { "text": "Pourquoi ton prénom me blesse", "time": 65.0 },
  { "text": "Quand il se cache juste là dans l'espace?", "time": 71.0 },
  { "text": "C'est quelle émotion, ta haine ou de la douceur", "time": 77.0 },
  { "text": "Quand j'entends ton prénom?", "time": 82.8 },
  { "text": "Je t'avais dit: Ne regarde pas en arrière", "time": 87.8 },
  { "text": "Le passé qui te suit te fait la guerre", "time": 93.0 },
  { "text": "Mais ma meilleure ennemie c'est toi", "time": 97.0 },
  { "text": "Fuis-moi, le pire c'est toi et moi", "time": 101.0 },
  { "text": "Mais ma meilleure ennemie c'est toi", "time": 109.0 },
  { "text": "Fuis-moi, le pire c'est toi et moi", "time": 111.0 },
  { "text": "", "time": 113.0 }
];

function updateLyrics() {
  var time = audio.currentTime;

  // Encuentra la línea actual
  var currentIndex = lyricsData.findIndex((line, i) =>
    time >= line.time && (i === lyricsData.length - 1 || time < lyricsData[i + 1].time)
  );

  if (currentIndex !== -1) {
    lyrics.innerHTML = lyricsData[currentIndex].text; // Muestra la línea actual
    lyrics.style.opacity = 1; // Asegura que sea visible
  } else {
    lyrics.style.opacity = 0; // Oculta el contenedor si no hay línea actual
  }

  // Llama a `showTitleAndHideFlowers()` cuando el tiempo sea 113.0
  if (time >= lyricsData[lyricsData.length - 1].time) {
    showTitleAndHideFlowers();
  }
}

// Función para mostrar el título y ocultar las flores
function showTitleAndHideFlowers() {
  // Ocultar flores con animación
  flowers.style.animation = "fadeOut 2s ease-in-out forwards";
  setTimeout(() => {
    flowers.style.display = "none"; // Esconde completamente después de la animación
  }, 2000);

  // Mostrar título con animación
  titulo.style.display = "block"; // Asegura que el título esté visible
  titulo.style.animation = "fadeIn 2s ease-in-out forwards";
}

// Escucha el evento `timeupdate` para sincronizar las letras
audio.addEventListener("timeupdate", updateLyrics);


// Función para mostrar el título y ocultar las flores
function showTitleAndHideFlowers() {
  // Ocultar flores con animación
  flowers.style.animation = "fadeOut 2s ease-in-out forwards";
  setTimeout(() => {
    flowers.style.display = "none"; // Esconde completamente después de la animación
  }, 2000);

  // Mostrar título con animación
  titulo.style.display = "block"; // Asegura que el título esté visible
  titulo.style.animation = "fadeIn 2s ease-in-out forwards";
}

// Escucha el evento `timeupdate` para sincronizar las letras
audio.addEventListener("timeupdate", updateLyrics);