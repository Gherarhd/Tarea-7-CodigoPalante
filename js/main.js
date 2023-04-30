"use strict";

const saludo = "¡Hola Mundo!";
console.log(saludo);

const color = document.querySelectorAll(".texto");

color.forEach((seccion) => {
  seccion.addEventListener("mouseover", function () {
    seccion.classList.add("colorTexto");
  });

  seccion.addEventListener("mouseout", function () {
    seccion.classList.remove("colorTexto");
  });
});
const color1 = document.querySelectorAll(".texto1");

color1.forEach((seccion) => {
  seccion.addEventListener("mouseover", function () {
    seccion.classList.add("colorTexto1");
  });

  seccion.addEventListener("mouseout", function () {
    seccion.classList.remove("colorTexto1");
  });
});
