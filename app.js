const copiarAPortapapeles = (str) => {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

const icons = document.querySelectorAll(".personal-data-icon");

icons.forEach((icono) => {
  icono.addEventListener("mousedown", (event) => {
    copiarAPortapapeles(event.target.parentNode.textContent);
    event.target.style.color = "#9e9e99";
  });
  icono.addEventListener("mouseup", (event) => {
    event.target.style.color = "#0f0f0f";
  });
});

const imagenesExpLaboral = [
  "./imgs/habilidades-call-center.jpg",
  "./imgs/lukas-blazek-mcSDtbWXUZU-unsplash.jpg",
  "./imgs/ilya-pavlov-OqtafYT5kTw-unsplash.jpg",
];

const imagenesHabDuras = [
  "./imgs/html.png",
  "./imgs/css.png",
  "./imgs/javascript.png",
  "./imgs/istockphoto-1298834126-612x612.jpg",
  "./imgs/office.png",
];

const imagenesHabBlandas = [
  "./imgs/comunicacion-verbal-y-no-verbal.jpg",
  "./imgs/organizacion.jpg",
  "./imgs/importancia-trabajo-en-equipo.jpg",
];

let indice = 0;
let setImagenes = [];

const botonesFlechas = document.querySelectorAll(".button-arrow");

botonesFlechas.forEach((boton) => {
  boton.addEventListener("click", (event) => {
    switch (event.target.parentNode.id) {
      case "imagenes-exp-laboral":
        setImagenes = imagenesExpLaboral;
        break;
      case "imagenes-hab-duras":
        setImagenes = imagenesHabDuras;
        break;
      case "imagenes-hab-blandas":
        setImagenes = imagenesHabBlandas;
        break;
    }

    if (event.target.className.includes("right-arrow")) {
      indice++;
      if (indice >= setImagenes.length) {
        indice = 0;
      }
    } else {
      indice--;
      if (indice < 0) {
        indice = setImagenes.length - 1;
      }
    }

    event.target.parentNode.childNodes.forEach((element) => {
      if (element.className == "img-example") {
        element.src = setImagenes[indice];
      }
    });
  });
});
