"use strict";

window.addEventListener("DOMContentLoaded", start);

// all const

const colorBox = document.querySelector(".colorbox");
const input = document.querySelector("#colorwheel");
const colorCodes = document.querySelector("#colorCodes");
const h1 = document.querySelector("h1");

const hexValue = document.querySelector(".hex");
const rgbValue = document.querySelector(".rgb");
const hslValue = document.querySelector(".hsl");

let r;
let g;
let b;

// start
function start() {
  //   console.log("start");

  hexValue.textContent = ``;
  rgbValue.textContent = ``;
  hslValue.textContent = ``;

  input.addEventListener("input", displayColorInColorBox);
}

function displayColorInColorBox() {
  //   console.log(`displayColorInColorBox`);
  colorBox.style.backgroundColor = input.value;
  h1.style.color = input.value;
  showHex(hexValue);
}

function showHex(hexValue) {
  hexValue.textContent = input.value.toUpperCase();
  hexValue = hexValue.textContent;
  //   console.log(hexValue);
  hexToRGB(hexValue);
}

function hexToRGB(hexValue) {
  //   console.log("hexToRGB");
  console.log(hexValue);

  r = hexValue.substring(1, 3).toString();
  g = hexValue.substring(3, 5).toString();
  b = hexValue.substring(5).toString();

  console.log(`{r: ${r}, g: ${g}, b: ${b}}`);

  r = parseInt(r, 16);
  g = parseInt(g, 16);
  b = parseInt(b, 16);

  console.log(`{r: ${r}, g: ${g}, b: ${b}}`);

  let rgbObj = { r, g, b };
  rgbValue.textContent = `rgb(${rgbObj.r}, ${rgbObj.g}, ${rgbObj.b})`;
}

function hexToRGB(hexValue) {
  //   console.log("hexToRGB");
  console.log(hexValue);

  r = hexValue.substring(1, 3).toString();
  g = hexValue.substring(3, 5).toString();
  b = hexValue.substring(5).toString();

  console.log(`{r: ${r}, g: ${g}, b: ${b}}`);

  r = parseInt(r, 16);
  g = parseInt(g, 16);
  b = parseInt(b, 16);

  console.log(`{r: ${r}, g: ${g}, b: ${b}}`);

  let rgbObj = { r, g, b };
  rgbValue.textContent = `rgb(${rgbObj.r}, ${rgbObj.r}, ${rgbObj.r})`;

  rgbToHSL(rgbObj);
}

function rgbToHSL(rgbObj) {
  console.log("rgbToHSL");

  let r = rgbObj.r;
  let g = rgbObj.g;
  let b = rgbObj.b;

  //   *** paste code

  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }

  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
  //   *** end pasted code

  h = h.toFixed(0);
  s = s.toFixed(0);
  l = l.toFixed(0);

  let hslObj = { h, s, l };
  console.log(hslObj);

  hslValue.textContent = "hsl: " + hslObj.h + "% " + hslObj.s + "% " + hslObj.l + "%";
}

function showHSL(hslObj) {
  HTML.hslValue.textContent = "hsl: " + hslObj.h.toFixed(0) + "%. " + hslObj.s.toFixed(0) + "%. " + hslObj.l.toFixed(0) + "%";
}
