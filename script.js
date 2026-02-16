"use strict";

const navbar = document.querySelector(".navbar_container");
const htmlBody = document.querySelector("body");

const dpr = window.devicePixelRatio || 1;
const width = 300;
const height = 160;

/////////////// WEB SCROLLING ///////////////

const wcm_bttm = document.getElementById("wcm-bttm");
const phone_wcm_bttm = document.getElementById("phn-wcm-bttm");
const sct_welcome = document.getElementById("welcome");

wcm_bttm.addEventListener("click", (e) => {
  const welcome_coords = sct_welcome.getBoundingClientRect();
  const navbarHeight = 2 * navbar.offsetHeight;

  window.scrollTo({
    left: 0,
    top: welcome_coords.top + window.pageYOffset - navbarHeight,
    behavior: "smooth",
  });
});

phone_wcm_bttm.addEventListener("click", (e) => {
  const welcome_coords = sct_welcome.getBoundingClientRect();
  const navbarHeight = 2 * navbar.offsetHeight;

  window.scrollTo({
    left: 0,
    top: welcome_coords.top + window.pageYOffset - navbarHeight,
    behavior: "smooth",
  });
});

const keiki_bttm = document.getElementById("keiki-bttm");
const phone_keiki_bttm = document.getElementById("phn-keiki-bttm");
const sct_behind = document.getElementById("sct-behind");

keiki_bttm.addEventListener("click", (e) => {
  const behind_coords = sct_behind.getBoundingClientRect();
  const navbarHeight = 2 * navbar.offsetHeight;

  window.scrollTo({
    left: behind_coords.left + window.pageXOffset,
    top: behind_coords.top + window.pageYOffset - navbarHeight,
    behavior: "smooth",
  });
});

phone_keiki_bttm.addEventListener("click", (e) => {
  const behind_coords = sct_behind.getBoundingClientRect();
  const navbarHeight = 2 * navbar.offsetHeight;

  window.scrollTo({
    left: behind_coords.left + window.pageXOffset,
    top: behind_coords.top + window.pageYOffset - navbarHeight,
    behavior: "smooth",
  });
});

const svc_bttm = document.getElementById("svc-bttm");
const phone_svc_bttm = document.getElementById("phn-svc-bttm");
const sct_services = document.getElementById("sct-services");

svc_bttm.addEventListener("click", (e) => {
  sct_services.scrollIntoView({ behavior: "smooth" });
});
phone_svc_bttm.addEventListener("click", (e) => {
  sct_services.scrollIntoView({ behavior: "smooth" });
});

const trf_bttm = document.getElementById("trf-bttm");
const phone_trf_bttm = document.getElementById("phn-trf-bttm");
const sct_tariffs = document.getElementById("sct-tariffs");

trf_bttm.addEventListener("click", (e) => {
  sct_tariffs.scrollIntoView({ behavior: "smooth" });
});
phone_trf_bttm.addEventListener("click", (e) => {
  sct_tariffs.scrollIntoView({ behavior: "smooth" });
});

const ctc_bttm = document.getElementById("ctc-bttm");
const phone_ctc_bttm = document.getElementById("phn-ctc-bttm");
const sct_contact = document.getElementById("sct-contact");

ctc_bttm.addEventListener("click", (e) => {
  sct_contact.scrollIntoView({ behavior: "smooth" });
});
phone_ctc_bttm.addEventListener("click", (e) => {
  sct_contact.scrollIntoView({ behavior: "smooth" });
});

/////////////// RENDER ELEMENTS ///////////////

/* MOTO */

const care = document.getElementById("care");
document.addEventListener("DOMContentLoaded", () => {
  care.classList.toggle("loaded1");
});

const bloom = document.getElementById("bloom");
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    bloom.classList.toggle("loaded2");
  }, 1000);
});

const flower = document.getElementById("flower");
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    flower.classList.toggle("loaded3");
  }, 2000);
});

/* MOBILE MENU  */

const drop_bttm = document.getElementById("menu-bttm");
const drop_menu = document.getElementById("dropdown");
const drop_items = drop_menu.querySelectorAll("div");
drop_bttm.addEventListener("click", (e) => {
  e.stopPropagation();
  drop_menu.classList.toggle("displayed");
});

drop_items.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    drop_menu.classList.remove("displayed");
  });
});

htmlBody.addEventListener("click", (e) => {
  e.stopPropagation();
  drop_menu.classList.remove("displayed");
});

/* STICKY NAVBAR */

const sentinel = document.querySelector(".nav-sentinel");

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

const navbarObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

navbarObserver.observe(sentinel);

/* REVEAL SECTIONS */

// All sections (except origin)

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section-hidden");
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.25,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

// Origin

const origin = document.getElementById("origin-cont");
origin.classList.add("origin-hidden");

const revealOrigin = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("origin-hidden");
  observer.unobserve(entry.target);
};

const originObserver = new IntersectionObserver(revealOrigin, {
  root: null,
  threshold: 0.4,
});

originObserver.observe(origin);

/* TOP PIRAMID */

let canvas = document.getElementById("piramid-top");
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(400, 0);
ctx.lineTo(267, 150);
ctx.lineTo(533, 150);
ctx.fillStyle = "#fff4ba";
ctx.fill();

// Texto para piramid-top
ctx.font = "24px Quicksand, sans-serif";
ctx.fillStyle = "#f2bdd6";
ctx.textAlign = "center";
ctx.textBaseline = "middle";

// Centro aproximado del triángulo superior
ctx.fillText("FLORECER", 400, 100);

/* MID PIRAMID */

let canvas2 = document.getElementById("piramid-mid");
let ctx2 = canvas2.getContext("2d");

// Left Part
ctx2.beginPath();
ctx2.moveTo(267, 0);
ctx2.lineTo(133, 150);
ctx2.lineTo(398, 300);
ctx2.lineTo(398, 0);
ctx2.fillStyle = "#a0f2f2";
ctx2.fill();

// Right Part
ctx2.beginPath();
ctx2.moveTo(402, 0);
ctx2.lineTo(402, 150);
ctx2.lineTo(667, 150);
ctx2.lineTo(537, 0);
ctx2.fillStyle = "#a0f2f2";
ctx2.fill();

// Left Text
ctx2.font = "24px Quicksand, sans-serif";
ctx2.fillStyle = "#177362";
ctx2.textAlign = "center";
ctx2.textBaseline = "middle";

ctx2.fillText("PREVENCIÓN", 300, 85);

// Right Text 1
ctx2.font = "24px Quicksand, sans-serif";
ctx2.fillStyle = "#177362";
ctx2.textAlign = "center";
ctx2.textBaseline = "middle";

ctx2.fillText("PRESENCIA", 500, 73);

// Right Text 2
ctx2.font = "24px Quicksand, sans-serif";
ctx2.fillStyle = "#177362";
ctx2.textAlign = "center";
ctx2.textBaseline = "middle";

ctx2.fillText("TERAPEUTICA", 501, 97);

/* BOTTOM PIRAMID */

let canvas3 = document.getElementById("piramid-bottom");
let ctx3 = canvas3.getContext("2d");

// Left Part
ctx3.beginPath();
ctx3.moveTo(133, 0);
ctx3.lineTo(0, 150);
ctx3.lineTo(265, 300);
ctx3.lineTo(265, 0);
ctx3.fillStyle = "#177362";
ctx3.fill();

// Center Part
ctx3.beginPath();
ctx3.moveTo(269, 0);
ctx3.lineTo(269, 150);
ctx3.lineTo(532, 534);
ctx3.lineTo(532, 0);
ctx3.fillStyle = "#177362";
ctx3.fill();

// Right Part
ctx3.beginPath();
ctx3.moveTo(536, 0);
ctx3.lineTo(536, 150);
ctx3.lineTo(800, 150);
ctx3.lineTo(667, 0);
ctx3.fillStyle = "#177362";
ctx3.fill();

// Left Text
ctx3.font = "24px Quicksand, sans-serif";
ctx3.fillStyle = "#fff4ba";
ctx3.textAlign = "center";
ctx3.textBaseline = "middle";

ctx3.fillText("EMPATÍA", 170, 85);

// Center Text 1
ctx3.font = "24px Quicksand, sans-serif";
ctx3.fillStyle = "#fff4ba";
ctx3.textAlign = "center";
ctx3.textBaseline = "middle";

ctx3.fillText("EVIDENCIA", 400, 73);

// Center Text 2
ctx3.font = "24px Quicksand, sans-serif";
ctx3.fillStyle = "#fff4ba";
ctx3.textAlign = "center";
ctx3.textBaseline = "middle";

ctx3.fillText("CIENTÍFICA", 400, 97);

// Right Text 1
ctx3.font = "24px Quicksand, sans-serif";
ctx3.fillStyle = "#fff4ba";
ctx3.textAlign = "center";
ctx3.textBaseline = "middle";

ctx3.fillText("EXPERIENCIA", 620, 73);

// Right Text 2
ctx3.font = "24px Quicksand, sans-serif";
ctx3.fillStyle = "#fff4ba";
ctx3.textAlign = "center";
ctx3.textBaseline = "middle";

ctx3.fillText("+ CONOCIMIENTO", 640, 97);

/* SHADOW - KALI */

let canvas12 = document.getElementById("kali-shadow");
let ctx12 = canvas12.getContext("2d");
const grad = ctx.createRadialGradient(0, 150, 0, 0, 150, 150);
grad.addColorStop(0, "#61d1d1");
grad.addColorStop(1, "#a0f2f2");

ctx12.beginPath();
ctx12.moveTo(0, 50);
ctx12.quadraticCurveTo(13, 70, 10, 90);
ctx12.quadraticCurveTo(9, 90, 15, 100);
ctx12.bezierCurveTo(20, 105, 20, 130, 12, 150);
ctx12.quadraticCurveTo(9, 170, 12, 175);
ctx12.quadraticCurveTo(14, 190, 0, 200);
ctx12.fillStyle = grad;
ctx12.fill();

/* BUBBLE TYPE 1 - SERVICES */

// Bubble 1-1
let canvas4 = document.getElementById("bubble1");
let ctx4 = canvas4.getContext("2d");

const width3 = 430;
const height3 = 290;

canvas4.width = width3 * dpr;
canvas4.height = height3 * dpr;

// Mantener tamaño visual
canvas4.style.width = width3 + "px";
canvas4.style.height = height3 + "px";

// Escalar el contexto para que las coordenadas sigan igual
ctx4.scale(dpr, dpr);

ctx4.beginPath();
ctx4.moveTo(80, 80);
ctx4.lineTo(300, 60);
ctx4.bezierCurveTo(350, 60, 380, 60, 400, 150);
ctx4.bezierCurveTo(410, 230, 400, 250, 390, 250);
ctx4.bezierCurveTo(300, 300, 50, 280, 70, 280);
ctx4.quadraticCurveTo(25, 260, 30, 200);
ctx4.bezierCurveTo(40, 100, 60, 50, 120, 100);
ctx4.quadraticCurveTo(50, 85, 80, 80);
ctx4.fillStyle = "#fff4ba";
ctx4.fill();

ctx4.font = "500 30px Quicksand, sans-serif";
ctx4.fillStyle = "#a0f2f2";
ctx4.textAlign = "center";
ctx4.textBaseline = "middle";

ctx4.fillText("FISIOTERAPIA", 210, 150);

ctx4.font = "500 30px Quicksand, sans-serif";
ctx4.fillStyle = "#a0f2f2";
ctx4.textAlign = "center";
ctx4.textBaseline = "middle";

ctx4.fillText("PEDIÁTRICA", 210, 200);

ctx4.shadowColor = "rgba(3, 59, 30, 0.4)";
ctx4.shadowBlur = 10;
ctx4.shadowOffsetX = 5;
ctx4.shadowOffsetY = 5;

// Bubble 1-2
let canvas5 = document.getElementById("bubble2");
let ctx5 = canvas5.getContext("2d");

canvas5.width = width3 * dpr;
canvas5.height = height3 * dpr;

// Mantener tamaño visual
canvas5.style.width = width3 + "px";
canvas5.style.height = height3 + "px";

// Escalar el contexto para que las coordenadas sigan igual
ctx5.scale(dpr, dpr);

ctx5.beginPath();
ctx5.moveTo(80, 80);
ctx5.lineTo(300, 60);
ctx5.bezierCurveTo(350, 60, 380, 60, 400, 150);
ctx5.bezierCurveTo(410, 230, 400, 250, 390, 250);
ctx5.bezierCurveTo(300, 300, 50, 280, 70, 280);
ctx5.quadraticCurveTo(25, 260, 30, 200);
ctx5.bezierCurveTo(40, 100, 60, 50, 120, 100);
ctx5.quadraticCurveTo(50, 85, 80, 80);
ctx5.fillStyle = "#f2bdd6";
ctx5.fill();

ctx5.font = "500 30px Quicksand, sans-serif";
ctx5.fillStyle = "#177362";
ctx5.textAlign = "center";
ctx5.textBaseline = "middle";

ctx5.fillText("FISIOTERAPIA", 210, 150);

ctx5.font = "500 30px Quicksand, sans-serif";
ctx5.fillStyle = "#177362";
ctx5.textAlign = "center";
ctx5.textBaseline = "middle";

ctx5.fillText("NEUROLÓGICA", 210, 200);

// Bubble 1-3
let canvas6 = document.getElementById("bubble3");
let ctx6 = canvas6.getContext("2d");

canvas6.width = width3 * dpr;
canvas6.height = height3 * dpr;

// Mantener tamaño visual
canvas6.style.width = width3 + "px";
canvas6.style.height = height3 + "px";

// Escalar el contexto para que las coordenadas sigan igual
ctx6.scale(dpr, dpr);

ctx6.beginPath();
ctx6.moveTo(80, 40);
ctx6.lineTo(300, 20);
ctx6.bezierCurveTo(350, 20, 380, 20, 400, 110);
ctx6.bezierCurveTo(410, 190, 400, 210, 390, 210);
ctx6.bezierCurveTo(300, 260, 50, 240, 70, 240);
ctx6.quadraticCurveTo(25, 220, 30, 160);
ctx6.bezierCurveTo(40, 60, 60, 10, 120, 60);
ctx6.quadraticCurveTo(50, 45, 80, 40);
ctx6.fillStyle = "#177362";
ctx6.fill();

ctx6.font = "500 30px Quicksand, sans-serif";
ctx6.fillStyle = "#f2bdd6";
ctx6.textAlign = "center";
ctx6.textBaseline = "middle";

ctx6.fillText("FISIOTERAPIA", 210, 100);

ctx6.font = "500 30px Quicksand, sans-serif";
ctx6.fillStyle = "#f2bdd6";
ctx6.textAlign = "center";
ctx6.textBaseline = "middle";

ctx6.fillText("MÚSCULO-", 210, 140);

ctx6.font = "500 30px Quicksand, sans-serif";
ctx6.fillStyle = "#f2bdd6";
ctx6.textAlign = "center";
ctx6.textBaseline = "middle";

ctx6.fillText("ESQUELÉTICA", 210, 180);

// Bubble 1-4
let canvas7 = document.getElementById("bubble4");
let ctx7 = canvas7.getContext("2d");

canvas7.width = width3 * dpr;
canvas7.height = height3 * dpr;

// Mantener tamaño visual
canvas7.style.width = width3 + "px";
canvas7.style.height = height3 + "px";

// Escalar el contexto para que las coordenadas sigan igual
ctx7.scale(dpr, dpr);

ctx7.beginPath();
ctx7.moveTo(80, 40);
ctx7.lineTo(300, 20);
ctx7.bezierCurveTo(350, 20, 380, 20, 400, 110);
ctx7.bezierCurveTo(410, 190, 400, 210, 390, 210);
ctx7.bezierCurveTo(300, 260, 50, 240, 70, 240);
ctx7.quadraticCurveTo(25, 220, 30, 160);
ctx7.bezierCurveTo(40, 60, 60, 10, 120, 60);
ctx7.quadraticCurveTo(50, 45, 80, 40);
ctx7.fillStyle = "#a0f2f2";
ctx7.fill();

ctx7.font = "500 30px Quicksand, sans-serif";
ctx7.fillStyle = "#fff4ba";
ctx7.textAlign = "center";
ctx7.textBaseline = "middle";

ctx7.fillText("EMBARAZO", 210, 110);

ctx7.font = "500 30px Quicksand, sans-serif";
ctx7.fillStyle = "#fff4ba";
ctx7.textAlign = "center";
ctx7.textBaseline = "middle";

ctx7.fillText("Y POSTPARTO", 210, 160);

/* BUBBLE TYPE 2 - TARIFFS */

// Bublble 2-1

let canvas8 = document.getElementById("bubble2-1");
let ctx8 = canvas8.getContext("2d");

ctx8.beginPath();
ctx8.moveTo(40, 20);
ctx8.lineTo(470, 20);
ctx8.quadraticCurveTo(490, 20, 490, 40);
ctx8.lineTo(490, 30);
ctx8.quadraticCurveTo(490, 90, 450, 100);
ctx8.quadraticCurveTo(390, 120, 370, 170);
ctx8.quadraticCurveTo(350, 210, 320, 210);
ctx8.lineTo(40, 210);
ctx8.quadraticCurveTo(20, 210, 20, 180);
ctx8.lineTo(20, 40);
ctx8.quadraticCurveTo(20, 20, 40, 20);
ctx8.fillStyle = "#fff4ba";
ctx8.fill();

ctx8.font = "300 35px Quicksand, sans-serif";
ctx8.fillStyle = "#a0f2f2";
ctx8.textAlign = "center";
ctx8.textBaseline = "middle";

ctx8.fillText("VALORACIONES", 210, 115);

// Bublble 2-2

let canvas9 = document.getElementById("bubble2-2");
let ctx9 = canvas9.getContext("2d");

ctx9.beginPath();
ctx9.moveTo(40, 20);
ctx9.lineTo(470, 20);
ctx9.quadraticCurveTo(490, 20, 490, 40);
ctx9.lineTo(490, 30);
ctx9.quadraticCurveTo(490, 90, 450, 100);
ctx9.quadraticCurveTo(390, 120, 370, 170);
ctx9.quadraticCurveTo(350, 210, 320, 210);
ctx9.lineTo(40, 210);
ctx9.quadraticCurveTo(20, 210, 20, 180);
ctx9.lineTo(20, 40);
ctx9.quadraticCurveTo(20, 20, 40, 20);
ctx9.fillStyle = "#a0f2f2";
ctx9.fill();

// Bublble 2-3

let canvas10 = document.getElementById("bubble2-3");
let ctx10 = canvas10.getContext("2d");

ctx10.beginPath();
ctx10.moveTo(40, 20);
ctx10.lineTo(470, 20);
ctx10.quadraticCurveTo(490, 20, 490, 40);
ctx10.lineTo(490, 30);
ctx10.quadraticCurveTo(490, 90, 450, 100);
ctx10.quadraticCurveTo(390, 120, 370, 170);
ctx10.quadraticCurveTo(350, 210, 320, 210);
ctx10.lineTo(40, 210);
ctx10.quadraticCurveTo(20, 210, 20, 180);
ctx10.lineTo(20, 40);
ctx10.quadraticCurveTo(20, 20, 40, 20);
ctx10.fillStyle = "#f2bdd6";
ctx10.fill();

// Bublble 2-4

let canvas11 = document.getElementById("bubble2-4");
let ctx11 = canvas11.getContext("2d");

ctx11.beginPath();
ctx11.moveTo(40, 20);
ctx11.lineTo(470, 20);
ctx11.quadraticCurveTo(490, 20, 490, 40);
ctx11.lineTo(490, 30);
ctx11.quadraticCurveTo(490, 90, 450, 100);
ctx11.quadraticCurveTo(390, 120, 370, 170);
ctx11.quadraticCurveTo(350, 210, 320, 210);
ctx11.lineTo(40, 210);
ctx11.quadraticCurveTo(20, 210, 20, 180);
ctx11.lineTo(20, 40);
ctx11.quadraticCurveTo(20, 20, 40, 20);
ctx11.fillStyle = "#177362";
ctx11.fill();

/* MODAL WINDOWS */

// Modal 1

const trf_val_bttm = document.getElementById("bubble2-1-wrapper");
const mbl_tar_val = document.querySelector(".mbl-tar-val");
const modal1 = document.querySelector(".modal1");
const closeModalButtom1 = document.querySelector(".close-modal1");
const overlay = document.querySelector(".overlay");
trf_val_bttm.addEventListener("click", () => {
  modal1.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

mbl_tar_val.addEventListener("click", () => {
  modal1.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeModalButtom1.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  modal1.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  modal1.classList.add("hidden");
  modal2.classList.add("hidden");
  modal3.classList.add("hidden");
  modal4.classList.add("hidden");
  overlay.classList.add("hidden");
});

let canvas14 = document.getElementById("cv_price");
let ctx14 = canvas14.getContext("2d");

canvas14.style.width = width + "px";
canvas14.style.height = height + "px";
canvas14.width = width * dpr;
canvas14.height = height * dpr;

ctx14.scale(dpr, dpr);

ctx14.beginPath();
ctx14.moveTo(20, 10);
ctx14.quadraticCurveTo(60, 8, 60, 12);
ctx14.quadraticCurveTo(90, 5, 90, 7);
ctx14.quadraticCurveTo(135, 12, 135, 10);
ctx14.quadraticCurveTo(170, 10, 165, 9);
ctx14.quadraticCurveTo(200, 7, 195, 8);
ctx14.quadraticCurveTo(245, 11, 250, 14);
ctx14.quadraticCurveTo(280, 10, 280, 10);
ctx14.quadraticCurveTo(282, 40, 279, 38);
ctx14.quadraticCurveTo(280, 80, 284, 78);
ctx14.quadraticCurveTo(281, 115, 279, 117);
ctx14.quadraticCurveTo(280, 140, 280, 140);
ctx14.quadraticCurveTo(240, 143, 236, 140);
ctx14.quadraticCurveTo(210, 140, 208, 138);
ctx14.quadraticCurveTo(160, 141, 165, 142);
ctx14.quadraticCurveTo(110, 140, 111, 139);
ctx14.quadraticCurveTo(70, 137, 68, 141);
ctx14.quadraticCurveTo(20, 140, 20, 140);
ctx14.quadraticCurveTo(18, 110, 20, 110);
ctx14.quadraticCurveTo(19, 73, 18, 70);
ctx14.quadraticCurveTo(17, 45, 20, 44);
ctx14.quadraticCurveTo(20, 10, 20, 10);
ctx14.fillStyle = "#a0f2f2";
ctx14.fill();

ctx14.font = "25px Quicksand, sans-serif";
ctx14.fillStyle = "#177362";
ctx14.textBaseline = "middle";

ctx14.fillText("Presencial:", 85, 55);
ctx14.fillText("60 min ➡️ 60€", 65, 95);

// Modal 2

const trf_ind_bttm = document.getElementById("bubble2-2-wrapper");
const mbl_tar_ind = document.querySelector(".mbl-tar-ind");
const modal2 = document.querySelector(".modal2");
const closeModalButtom2 = document.querySelector(".close-modal2");
trf_ind_bttm.addEventListener("click", () => {
  modal2.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
mbl_tar_ind.addEventListener("click", () => {
  modal2.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
closeModalButtom2.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  modal2.classList.add("hidden");
  overlay.classList.add("hidden");
});

let canvas15 = document.getElementById("ind_price1");
let ctx15 = canvas15.getContext("2d");

canvas15.style.width = width + "px";
canvas15.style.height = height + "px";
canvas15.width = width * dpr;
canvas15.height = height * dpr;

ctx15.scale(dpr, dpr);

ctx15.beginPath();
ctx15.moveTo(20, 10);
ctx15.quadraticCurveTo(60, 8, 60, 12);
ctx15.quadraticCurveTo(90, 5, 90, 7);
ctx15.quadraticCurveTo(135, 12, 135, 10);
ctx15.quadraticCurveTo(170, 10, 165, 9);
ctx15.quadraticCurveTo(200, 7, 195, 8);
ctx15.quadraticCurveTo(245, 11, 250, 14);
ctx15.quadraticCurveTo(280, 10, 280, 10);
ctx15.quadraticCurveTo(282, 40, 279, 38);
ctx15.quadraticCurveTo(280, 80, 284, 78);
ctx15.quadraticCurveTo(281, 115, 279, 117);
ctx15.quadraticCurveTo(280, 140, 280, 140);
ctx15.quadraticCurveTo(240, 143, 236, 140);
ctx15.quadraticCurveTo(210, 140, 208, 138);
ctx15.quadraticCurveTo(160, 141, 165, 142);
ctx15.quadraticCurveTo(110, 140, 111, 139);
ctx15.quadraticCurveTo(70, 137, 68, 141);
ctx15.quadraticCurveTo(20, 140, 20, 140);
ctx15.quadraticCurveTo(18, 110, 20, 110);
ctx15.quadraticCurveTo(19, 73, 18, 70);
ctx15.quadraticCurveTo(17, 45, 20, 44);
ctx15.quadraticCurveTo(20, 10, 20, 10);
ctx15.fillStyle = "#fff4ba";
ctx15.fill();

ctx15.font = "25px Quicksand, sans-serif";
ctx15.fillStyle = "#177362";
ctx15.textBaseline = "middle";

ctx15.fillText("Presencial:", 90, 50);
ctx15.fillText("50 min ➡️ 65€*", 70, 95);

let canvas16 = document.getElementById("ind_price2");
let ctx16 = canvas16.getContext("2d");

canvas16.style.width = width + "px";
canvas16.style.height = height + "px";
canvas16.width = width * dpr;
canvas16.height = height * dpr;

ctx16.scale(dpr, dpr);

ctx16.beginPath();
ctx16.moveTo(20, 10);
ctx16.quadraticCurveTo(60, 8, 60, 12);
ctx16.quadraticCurveTo(90, 5, 90, 7);
ctx16.quadraticCurveTo(135, 12, 135, 10);
ctx16.quadraticCurveTo(170, 10, 165, 9);
ctx16.quadraticCurveTo(200, 7, 195, 8);
ctx16.quadraticCurveTo(245, 11, 250, 14);
ctx16.quadraticCurveTo(280, 10, 280, 10);
ctx16.quadraticCurveTo(282, 40, 279, 38);
ctx16.quadraticCurveTo(280, 80, 284, 78);
ctx16.quadraticCurveTo(281, 115, 279, 117);
ctx16.quadraticCurveTo(280, 140, 280, 140);
ctx16.quadraticCurveTo(240, 143, 236, 140);
ctx16.quadraticCurveTo(210, 140, 208, 138);
ctx16.quadraticCurveTo(160, 141, 165, 142);
ctx16.quadraticCurveTo(110, 140, 111, 139);
ctx16.quadraticCurveTo(70, 137, 68, 141);
ctx16.quadraticCurveTo(20, 140, 20, 140);
ctx16.quadraticCurveTo(18, 110, 20, 110);
ctx16.quadraticCurveTo(19, 73, 18, 70);
ctx16.quadraticCurveTo(17, 45, 20, 44);
ctx16.quadraticCurveTo(20, 10, 20, 10);
ctx16.fillStyle = "#fff4ba";
ctx16.fill();

ctx16.font = "18px Quicksand, sans-serif";
ctx16.fillStyle = "#177362";
ctx16.textBaseline = "middle";

ctx16.fillText("Psicomotricidad individual", 38, 55);
ctx16.fillText("o grupal:", 113, 75);
ctx16.fillText("Precio a consultar", 73, 105);

// Modal 3

const trf_onl_bttm = document.getElementById("bubble2-3-wrapper");
const mbl_tar_onl = document.querySelector(".mbl-tar-onl");
const modal3 = document.querySelector(".modal3");
const closeModalButtom3 = document.querySelector(".close-modal3");
trf_onl_bttm.addEventListener("click", () => {
  modal3.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
mbl_tar_onl.addEventListener("click", () => {
  modal3.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
closeModalButtom3.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  modal3.classList.add("hidden");
  overlay.classList.add("hidden");
});

let canvas17 = document.getElementById("onl_price");
let ctx17 = canvas17.getContext("2d");

canvas17.style.width = width + "px";
canvas17.style.height = height + "px";
canvas17.width = width * dpr;
canvas17.height = height * dpr;

ctx17.scale(dpr, dpr);

ctx17.beginPath();
ctx17.moveTo(20, 10);
ctx17.quadraticCurveTo(60, 8, 60, 12);
ctx17.quadraticCurveTo(90, 5, 90, 7);
ctx17.quadraticCurveTo(135, 12, 135, 10);
ctx17.quadraticCurveTo(170, 10, 165, 9);
ctx17.quadraticCurveTo(200, 7, 195, 8);
ctx17.quadraticCurveTo(245, 11, 250, 14);
ctx17.quadraticCurveTo(280, 10, 280, 10);
ctx17.quadraticCurveTo(282, 40, 279, 38);
ctx17.quadraticCurveTo(280, 80, 284, 78);
ctx17.quadraticCurveTo(281, 115, 279, 117);
ctx17.quadraticCurveTo(280, 140, 280, 140);
ctx17.quadraticCurveTo(240, 143, 236, 140);
ctx17.quadraticCurveTo(210, 140, 208, 138);
ctx17.quadraticCurveTo(160, 141, 165, 142);
ctx17.quadraticCurveTo(110, 140, 111, 139);
ctx17.quadraticCurveTo(70, 137, 68, 141);
ctx17.quadraticCurveTo(20, 140, 20, 140);
ctx17.quadraticCurveTo(18, 110, 20, 110);
ctx17.quadraticCurveTo(19, 73, 18, 70);
ctx17.quadraticCurveTo(17, 45, 20, 44);
ctx17.quadraticCurveTo(20, 10, 20, 10);
ctx17.fillStyle = "#177362";
ctx17.fill();

ctx17.font = "18px Quicksand, sans-serif";
ctx17.fillStyle = "#f2bdd6";
ctx17.textBaseline = "middle";

ctx17.fillText("Online 30 min ➡️ 35€", 55, 60);
ctx17.fillText("Online 50 min ➡️ 50€", 55, 100);

// modal 4

const trf_bns_bttm = document.getElementById("bubble2-4-wrapper");
const mbl_tar_bon = document.querySelector(".mbl-tar-bon");
const modal4 = document.querySelector(".modal4");
const closeModalButtom4 = document.querySelector(".close-modal4");
trf_bns_bttm.addEventListener("click", () => {
  modal4.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
mbl_tar_bon.addEventListener("click", () => {
  modal4.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
closeModalButtom4.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  modal4.classList.add("hidden");
  overlay.classList.add("hidden");
});

let canvas18 = document.getElementById("bns_price1");
let ctx18 = canvas18.getContext("2d");

canvas18.style.width = width + "px";
canvas18.style.height = height + "px";
canvas18.width = width * dpr;
canvas18.height = height * dpr;

ctx18.scale(dpr, dpr);

ctx18.beginPath();
ctx18.moveTo(20, 10);
ctx18.quadraticCurveTo(60, 8, 60, 12);
ctx18.quadraticCurveTo(90, 5, 90, 7);
ctx18.quadraticCurveTo(135, 12, 135, 10);
ctx18.quadraticCurveTo(170, 10, 165, 9);
ctx18.quadraticCurveTo(200, 7, 195, 8);
ctx18.quadraticCurveTo(245, 11, 250, 14);
ctx18.quadraticCurveTo(280, 10, 280, 10);
ctx18.quadraticCurveTo(282, 40, 279, 38);
ctx18.quadraticCurveTo(280, 80, 284, 78);
ctx18.quadraticCurveTo(281, 115, 279, 117);
ctx18.quadraticCurveTo(280, 140, 280, 140);
ctx18.quadraticCurveTo(240, 143, 236, 140);
ctx18.quadraticCurveTo(210, 140, 208, 138);
ctx18.quadraticCurveTo(160, 141, 165, 142);
ctx18.quadraticCurveTo(110, 140, 111, 139);
ctx18.quadraticCurveTo(70, 137, 68, 141);
ctx18.quadraticCurveTo(20, 140, 20, 140);
ctx18.quadraticCurveTo(18, 110, 20, 110);
ctx18.quadraticCurveTo(19, 73, 18, 70);
ctx18.quadraticCurveTo(17, 45, 20, 44);
ctx18.quadraticCurveTo(20, 10, 20, 10);
ctx18.fillStyle = "#f2bdd6";
ctx18.fill();

ctx18.font = "18px Quicksand, sans-serif";
ctx18.fillStyle = "#177362";
ctx18.textBaseline = "middle";

ctx18.fillText("SESIONES PRESENCIALES", 35, 35);
ctx18.fillText("Bono x4 ➡️ 230€*", 75, 70);
ctx18.fillText("Bono x8 ➡️ 440€*", 75, 110);

let canvas19 = document.getElementById("bns_price2");
let ctx19 = canvas19.getContext("2d");

canvas19.style.width = width + "px";
canvas19.style.height = height + "px";
canvas19.width = width * dpr;
canvas19.height = height * dpr;

ctx19.scale(dpr, dpr);

ctx19.beginPath();
ctx19.moveTo(20, 10);
ctx19.quadraticCurveTo(60, 8, 60, 12);
ctx19.quadraticCurveTo(90, 5, 90, 7);
ctx19.quadraticCurveTo(135, 12, 135, 10);
ctx19.quadraticCurveTo(170, 10, 165, 9);
ctx19.quadraticCurveTo(200, 7, 195, 8);
ctx19.quadraticCurveTo(245, 11, 250, 14);
ctx19.quadraticCurveTo(280, 10, 280, 10);
ctx19.quadraticCurveTo(282, 40, 279, 38);
ctx19.quadraticCurveTo(280, 80, 284, 78);
ctx19.quadraticCurveTo(281, 115, 279, 117);
ctx19.quadraticCurveTo(280, 140, 280, 140);
ctx19.quadraticCurveTo(240, 143, 236, 140);
ctx19.quadraticCurveTo(210, 140, 208, 138);
ctx19.quadraticCurveTo(160, 141, 165, 142);
ctx19.quadraticCurveTo(110, 140, 111, 139);
ctx19.quadraticCurveTo(70, 137, 68, 141);
ctx19.quadraticCurveTo(20, 140, 20, 140);
ctx19.quadraticCurveTo(18, 110, 20, 110);
ctx19.quadraticCurveTo(19, 73, 18, 70);
ctx19.quadraticCurveTo(17, 45, 20, 44);
ctx19.quadraticCurveTo(20, 10, 20, 10);
ctx19.fillStyle = "#f2bdd6";
ctx19.fill();

ctx19.font = "18px Quicksand, sans-serif";
ctx19.fillStyle = "#177362";
ctx19.textBaseline = "middle";

ctx19.fillText("Online (grupos o cursos)", 45, 60);
ctx19.fillText("Precio a consultar**", 75, 100);

/////////////// YOUTUBE VIDEO ///////////////

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    events: {
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady() {
  player.setPlaybackQuality("hd1080"); // Cambia calidad aquí
}

/////////////// MORNING-AFTERNOON BUTTONS ///////////////

const checkbox1 = document.getElementById("morning");
const checkbox2 = document.getElementById("afternoon");
const label1 = document.getElementById("morning-label");
const label2 = document.getElementById("afternoon-label");
const optionsContainer = document.querySelector(".options");

checkbox1.addEventListener("change", () => {
  label1.classList.toggle("clicked", checkbox1.checked);
});
checkbox2.addEventListener("change", () => {
  label2.classList.toggle("clicked", checkbox2.checked);
});

/////////////// MEDIUM-CONTACT BUTTONS ///////////////

const displayContactMedium = function (medium) {
  let htmlMediumInput = document.getElementById("medium");
  let htmlPrefix = document.getElementById("prefix");
  let htmlIti = document.querySelector(".iti");
  console.log(htmlMediumInput);
  if (!htmlPrefix && medium === "phone") {
    if (htmlMediumInput) {
      htmlMediumInput.remove();
    }

    htmlPrefix = document.createElement("input");
    htmlPrefix.id = "prefix";
    htmlPrefix.name = "iti";
    htmlPrefix.type = "tel";
    htmlPrefix.required = true;

    optionsContainer.insertAdjacentElement("afterend", htmlPrefix);

    const iti = window.intlTelInput(htmlPrefix, {
      initialCountry: "es",
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.20/js/utils.js",
    });
  }
  if (medium === "mail" && !htmlMediumInput) {
    htmlIti?.remove();
    htmlMediumInput = document.createElement("input");
    htmlMediumInput.id = "medium";
    htmlMediumInput.name = "medium";
    htmlMediumInput.type = "email";
    htmlMediumInput.classList.add("wider");
    htmlMediumInput.required = true;
    htmlMediumInput.placeholder = "Correo";
    optionsContainer.insertAdjacentElement("afterend", htmlMediumInput);
  }
};

const wsButton = document.getElementById("ws");
const wsImg = document.getElementById("wsimg");
const mailButton = document.getElementById("mail");
const mailImg = document.getElementById("mailimg");
const phoneButton = document.getElementById("phone");
const phoneImg = document.getElementById("phoneimg");

wsButton.addEventListener("click", () => {
  mailImg.classList.remove("clicked");
  phoneImg.classList.remove("clicked");
  wsImg.classList.toggle("clicked");

  displayContactMedium("phone");
});

mailButton.addEventListener("click", () => {
  wsImg.classList.remove("clicked");
  phoneImg.classList.remove("clicked");
  mailImg.classList.toggle("clicked");

  displayContactMedium("mail");
});

phoneButton.addEventListener("click", () => {
  wsImg.classList.remove("clicked");
  mailImg.classList.remove("clicked");
  phoneImg.classList.toggle("clicked");

  displayContactMedium("phone");
});

/////////////// CALENDAR ///////////////////////

let dates = [];

const datepicker = new FlexiDatepicker("#multiple-dates", {
  mode: "multiple",
  locale: "es-ES",
  dateFormat: "dd/MM/yyyy",
  showSelectWeekdays: false,
  showSelectWeekends: false,
  showSelectAllDays: false,
  disablePast: true,
  showClearAll: false,
  onSelectionChange: (data) => {
    dates = data.dates;
  },
});

console.log(dates);

/////////////// FORM DATA CAPTURE ///////////////

const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let showWarning = false;
  let warning = "Por favor, indique la siguiente información:\n";
  const formData = new FormData(form);
  const data = {
    fecha: dates,
    mañana: formData.get("morning") ? "SI" : "NO",
    tarde: formData.get("afternoon") ? "SI" : "NO",
    solicitud: formData.get("description"),
    medio: formData.get("contact"),
    medio_info: formData.get("iti") ?? formData.get("medium"),
  };
  if (!formData.get("multiple-dates")) {
    warning =
      warning + "   - Seleccione al menos una fecha en el calendario.\n";
    showWarning = true;
  }
  if (!formData.get("morning") && !formData.get("afternoon")) {
    warning =
      warning +
      "   - Seleccione al menos una franja horaria (mañana o tarde) o seleccione ambas si no tiene preferencias.\n";
    showWarning = true;
  }
  if (formData.get("contact") === null) {
    showWarning = true;
    warning =
      warning +
      "   - Seleccione un medio para que podamos contactar con usted y confirmar su cita.";
  }
  if (showWarning) {
    alert(warning);
    return;
  }

  const request = await fetch(`/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await request;

  if (!request.ok || result.text() === "error") {
    alert(
      "Ha habido un problema y tu solicitud no se ha enviado. Por favor, vuelva a intentarlo o contáctenos a través de otro medio."
    );
  } else {
    alert(
      "Muchas gracias por su solicitud. Contactaremos con usted para confirmar su cita lo antes posible"
    );
  }
});

/////////////// CONTACT-INFO ///////////////

let canvas13 = document.getElementById("bubble3-1");
let ctx13 = canvas13.getContext("2d");

const dpr2 = window.devicePixelRatio || 1;

// Tamaño visual (CSS)
const width2 = 450;
const height2 = 290;

// Tamaño real del buffer
canvas13.width = width2 * dpr2;
canvas13.height = height2 * dpr2;

// Escalado para que las coordenadas sigan igual
ctx13.scale(dpr2, dpr2);

ctx13.beginPath();
ctx13.moveTo(80, 80);
ctx13.lineTo(300, 60);
ctx13.bezierCurveTo(350, 60, 380, 60, 400, 150);
ctx13.bezierCurveTo(410, 230, 400, 250, 390, 250);
ctx13.bezierCurveTo(300, 300, 50, 280, 70, 280);
ctx13.quadraticCurveTo(25, 260, 30, 200);
ctx13.bezierCurveTo(40, 100, 60, 50, 120, 100);
ctx13.quadraticCurveTo(50, 85, 80, 80);
ctx13.fillStyle = "#fff4ba";
ctx13.fill();

ctx13.font = "500 30px Quicksand, sans-serif";
ctx13.fillStyle = "#f2bdd6";
ctx13.textAlign = "center";
ctx13.textBaseline = "middle";

ctx13.fillText("628 589 365", 220, 153);

ctx13.font = "600 20px Quicksand, sans-serif";
ctx13.fillStyle = "#f2bdd6";
ctx13.textAlign = "center";
ctx13.textBaseline = "middle";

ctx13.fillText("noeliavalienteserrano@gmail.com", 210, 200);
