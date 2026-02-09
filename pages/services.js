"use strict";

const htmlBody = document.querySelector("body");

/////////////// WEB SCROLLING ///////////////

const ped_bttm = document.getElementById("ped-bttm");
const sct_ped = document.getElementById("sct_ped");

ped_bttm.addEventListener("click", (e) => {
  sct_ped.scrollIntoView({ behavior: "smooth" });
});

const neu_bttm = document.getElementById("neu-bttm");
const sct_neu = document.getElementById("sct_neu");

neu_bttm.addEventListener("click", (e) => {
  sct_neu.scrollIntoView({ behavior: "smooth" });
});

const mus_bttm = document.getElementById("mus-bttm");
const sct_mus = document.getElementById("sct_mus");

mus_bttm.addEventListener("click", (e) => {
  sct_mus.scrollIntoView({ behavior: "smooth" });
});

const pre_bttm = document.getElementById("pre-bttm");
const sct_pre = document.getElementById("sct_pre");

pre_bttm.addEventListener("click", (e) => {
  sct_pre.scrollIntoView({ behavior: "smooth" });
});

/////////////// RENDER ELEMENTS ///////////////

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

const navbar = document.querySelector(".nav_container");
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

// separator 1
let canvas13 = document.getElementById("separator1");
let ctx13 = canvas13.getContext("2d");

ctx13.beginPath();
ctx13.moveTo(0, 0);
ctx13.lineTo(0, 90);
ctx13.bezierCurveTo(10, 150, 35, 75, 50, 110);
ctx13.bezierCurveTo(65, 111, 85, 86, 95, 67);
ctx13.bezierCurveTo(110, 40, 130, 89, 145, 90);
ctx13.bezierCurveTo(165, 62, 195, 51, 215, 110);
ctx13.quadraticCurveTo(220, 79, 245, 60);
ctx13.bezierCurveTo(280, 62, 285, 110, 295, 0);
ctx13.fillStyle = "#fff4ba";
ctx13.fill();

// separator 2
let canvas14 = document.getElementById("separator2");
let ctx14 = canvas14.getContext("2d");

ctx14.beginPath();
ctx14.moveTo(0, 0);
ctx14.lineTo(0, 90);
ctx14.bezierCurveTo(10, 150, 35, 75, 50, 110);
ctx14.bezierCurveTo(65, 111, 85, 86, 95, 67);
ctx14.bezierCurveTo(110, 40, 130, 89, 145, 90);
ctx14.bezierCurveTo(165, 62, 195, 51, 215, 110);
ctx14.quadraticCurveTo(220, 79, 245, 60);
ctx14.bezierCurveTo(280, 62, 285, 110, 295, 0);
ctx14.quadraticCurveTo(350, 50, 375, 0);
ctx14.fillStyle = "#f2bdd6";
ctx14.fill();

// separator 3
let canvas15 = document.getElementById("separator3");
let ctx15 = canvas15.getContext("2d");

ctx15.beginPath();
ctx15.moveTo(0, 0);
ctx15.lineTo(0, 90);
ctx15.bezierCurveTo(10, 150, 35, 75, 50, 110);
ctx15.bezierCurveTo(65, 111, 85, 86, 95, 67);
ctx15.bezierCurveTo(110, 40, 130, 89, 145, 90);
ctx15.bezierCurveTo(165, 62, 195, 51, 215, 110);
ctx15.quadraticCurveTo(220, 79, 245, 60);
ctx15.bezierCurveTo(280, 62, 285, 110, 295, 0);
ctx15.quadraticCurveTo(350, 50, 375, 0);
ctx15.fillStyle = "#177362";
ctx15.fill();

// Bublble 1-1

document.fonts.ready.then(() => {
  drawBubble1_1();
});
function drawBubble1_1() {
  let canvas4 = document.getElementById("bubble1");
  let ctx4 = canvas4.getContext("2d");

  ctx4.beginPath();
  ctx4.moveTo(80, 80);
  ctx4.lineTo(300, 60);
  ctx4.bezierCurveTo(350, 60, 380, 60, 400, 150);
  ctx4.bezierCurveTo(410, 230, 400, 250, 390, 250);
  ctx4.bezierCurveTo(300, 300, 50, 280, 70, 280);
  ctx4.quadraticCurveTo(25, 260, 30, 200);
  ctx4.bezierCurveTo(40, 100, 60, 50, 40, 120);
  ctx4.quadraticCurveTo(50, 85, 80, 80);
  ctx4.fillStyle = "#f2bdd6";
  ctx4.fill();

  ctx4.font = "700 30px Quicksand";
  ctx4.fillStyle = "#177362";
  ctx4.textAlign = "center";
  ctx4.textBaseline = "middle";

  ctx4.fillText("ALTERACIONES", 210, 150);

  ctx4.font = "700 30px Quicksand";
  ctx4.fillStyle = "#177362";
  ctx4.textAlign = "center";
  ctx4.textBaseline = "middle";

  ctx4.fillText("DIGESTIVAS", 210, 200);
}

// Bubble 1-2
document.fonts.ready.then(() => {
  drawBubble1_2();
});
function drawBubble1_2() {
  let canvas5 = document.getElementById("bubble2");
  let ctx5 = canvas5.getContext("2d");

  ctx5.beginPath();
  ctx5.moveTo(80, 80);
  ctx5.lineTo(300, 60);
  ctx5.bezierCurveTo(350, 60, 380, 60, 400, 150);
  ctx5.bezierCurveTo(410, 230, 400, 250, 390, 250);
  ctx5.bezierCurveTo(300, 300, 50, 280, 70, 280);
  ctx5.quadraticCurveTo(25, 260, 30, 200);
  ctx5.bezierCurveTo(40, 100, 60, 50, 40, 120);
  ctx5.quadraticCurveTo(50, 85, 80, 80);
  ctx5.fillStyle = "#a0f2f2";
  ctx5.fill();

  ctx5.font = "700 30px Quicksand";
  ctx5.fillStyle = "#fff4ba";
  ctx5.textAlign = "center";
  ctx5.textBaseline = "middle";

  ctx5.fillText("ALTERACIONES", 210, 140);

  ctx5.font = "700 30px Quicksand";
  ctx5.fillStyle = "#fff4ba";
  ctx5.textAlign = "center";
  ctx5.textBaseline = "middle";

  ctx5.fillText("Y PREFERENCIAS", 210, 180);

  ctx5.font = "700 30px Quicksand";
  ctx5.fillStyle = "#fff4ba";
  ctx5.textAlign = "center";
  ctx5.textBaseline = "middle";

  ctx5.fillText("POSTURALES", 210, 220);
}
// Bubble 1-3
document.fonts.ready.then(() => {
  drawBubble1_3();
});
function drawBubble1_3() {
  let canvas6 = document.getElementById("bubble3");
  let ctx6 = canvas6.getContext("2d");

  ctx6.beginPath();
  ctx6.moveTo(80, 80);
  ctx6.lineTo(300, 60);
  ctx6.bezierCurveTo(350, 60, 380, 60, 400, 150);
  ctx6.bezierCurveTo(410, 230, 400, 250, 390, 250);
  ctx6.bezierCurveTo(300, 300, 50, 280, 70, 280);
  ctx6.quadraticCurveTo(25, 260, 30, 200);
  ctx6.bezierCurveTo(40, 100, 60, 50, 40, 120);
  ctx6.quadraticCurveTo(50, 85, 80, 80);
  ctx6.fillStyle = "#177362";
  ctx6.fill();

  ctx6.font = "700 30px Quicksand";
  ctx6.fillStyle = "#f2bdd6";
  ctx6.textAlign = "center";
  ctx6.textBaseline = "middle";

  ctx6.fillText("DEFORMIDADES", 210, 150);

  ctx6.font = "700 30px Quicksand";
  ctx6.fillStyle = "#f2bdd6";
  ctx6.textAlign = "center";
  ctx6.textBaseline = "middle";

  ctx6.fillText("CRANEALES", 210, 200);
}

// Bubble 1-4
document.fonts.ready.then(() => {
  drawBubble1_4();
});
function drawBubble1_4() {
  let canvas7 = document.getElementById("bubble4");
  let ctx7 = canvas7.getContext("2d");

  ctx7.beginPath();
  ctx7.moveTo(80, 80);
  ctx7.lineTo(300, 60);
  ctx7.bezierCurveTo(350, 60, 380, 60, 400, 150);
  ctx7.bezierCurveTo(410, 230, 400, 250, 390, 250);
  ctx7.bezierCurveTo(300, 300, 50, 280, 70, 280);
  ctx7.quadraticCurveTo(25, 260, 30, 200);
  ctx7.bezierCurveTo(40, 100, 60, 50, 40, 120);
  ctx7.quadraticCurveTo(50, 85, 80, 80);
  ctx7.fillStyle = "#f2bdd6";
  ctx7.fill();

  ctx7.font = "700 30px Quicksand";
  ctx7.fillStyle = "#fff4ba";
  ctx7.textAlign = "center";
  ctx7.textBaseline = "middle";

  ctx7.fillText("DESFASES", 210, 125);

  ctx7.font = "700 30px Quicksand";
  ctx7.fillStyle = "#fff4ba";
  ctx7.textAlign = "center";
  ctx7.textBaseline = "middle";

  ctx7.fillText("MADURATIVOS Y", 210, 160);

  ctx7.font = "700 30px Quicksand";
  ctx7.fillStyle = "#fff4ba";
  ctx7.textAlign = "center";
  ctx7.textBaseline = "middle";

  ctx7.fillText("ALTERACIONES", 210, 195);

  ctx7.font = "700 30px Quicksand";
  ctx7.fillStyle = "#fff4ba";
  ctx7.textAlign = "center";
  ctx7.textBaseline = "middle";

  ctx7.fillText("DEL DESARROLLO", 210, 230);
}

// Bublble 1-5
document.fonts.ready.then(() => {
  drawBubble1_5();
});
function drawBubble1_5() {
  let canvas8 = document.getElementById("bubble5");
  let ctx8 = canvas8.getContext("2d");

  ctx8.beginPath();
  ctx8.moveTo(80, 80);
  ctx8.lineTo(300, 60);
  ctx8.bezierCurveTo(350, 60, 380, 60, 400, 150);
  ctx8.bezierCurveTo(410, 230, 400, 250, 390, 250);
  ctx8.bezierCurveTo(300, 300, 50, 280, 70, 280);
  ctx8.quadraticCurveTo(25, 260, 30, 200);
  ctx8.bezierCurveTo(40, 100, 60, 50, 40, 120);
  ctx8.quadraticCurveTo(50, 85, 80, 80);
  ctx8.fillStyle = "#177362";
  ctx8.fill();

  ctx8.font = "700 30px Quicksand";
  ctx8.fillStyle = "#a0f2f2";
  ctx8.textAlign = "center";
  ctx8.textBaseline = "middle";

  ctx8.fillText("FISIOTERAPIA", 210, 150);

  ctx8.font = "700 30px Quicksand";
  ctx8.fillStyle = "#a0f2f2";
  ctx8.textAlign = "center";
  ctx8.textBaseline = "middle";

  ctx8.fillText("RESPIRATORIA", 210, 200);
}

// Bublble 1-6
document.fonts.ready.then(() => {
  drawBubble1_6();
});
function drawBubble1_6() {
  let canvas9 = document.getElementById("bubble6");
  let ctx9 = canvas9.getContext("2d");

  ctx9.beginPath();
  ctx9.moveTo(80, 80);
  ctx9.lineTo(300, 60);
  ctx9.bezierCurveTo(350, 60, 380, 60, 400, 150);
  ctx9.bezierCurveTo(410, 230, 400, 250, 390, 250);
  ctx9.bezierCurveTo(300, 300, 50, 280, 70, 280);
  ctx9.quadraticCurveTo(25, 260, 30, 200);
  ctx9.bezierCurveTo(40, 100, 60, 50, 40, 120);
  ctx9.quadraticCurveTo(50, 85, 80, 80);
  ctx9.fillStyle = "#f2bdd6";
  ctx9.fill();

  ctx9.font = "700 40px Quicksand";
  ctx9.fillStyle = "#fff4ba";
  ctx9.textAlign = "center";
  ctx9.textBaseline = "middle";

  ctx9.fillText("ASESORÍAS", 210, 180);
}

// Bublble 1-7
document.fonts.ready.then(() => {
  drawBubble1_7();
});
function drawBubble1_7() {
  let canvas10 = document.getElementById("bubble7");
  let ctx10 = canvas10.getContext("2d");

  ctx10.beginPath();
  ctx10.moveTo(80, 80);
  ctx10.lineTo(300, 60);
  ctx10.bezierCurveTo(350, 60, 380, 60, 400, 150);
  ctx10.bezierCurveTo(410, 230, 400, 250, 390, 250);
  ctx10.bezierCurveTo(300, 300, 50, 280, 70, 280);
  ctx10.quadraticCurveTo(25, 260, 30, 200);
  ctx10.bezierCurveTo(40, 100, 60, 50, 40, 120);
  ctx10.quadraticCurveTo(50, 85, 80, 80);
  ctx10.fillStyle = "#a0f2f2";
  ctx10.fill();

  ctx10.font = "700 30px Quicksand";
  ctx10.fillStyle = "#177362";
  ctx10.textAlign = "center";
  ctx10.textBaseline = "middle";

  ctx10.fillText("PSICOMOTRICIDAD", 210, 180);
}

// Bublble 2-1
document.fonts.ready.then(() => {
  drawBubble2_1();
});
function drawBubble2_1() {
  let canvas11 = document.getElementById("bubble8");
  let ctx11 = canvas11.getContext("2d");

  ctx11.beginPath();
  ctx11.moveTo(80, 80);
  ctx11.lineTo(300, 60);
  ctx11.bezierCurveTo(350, 60, 380, 60, 400, 150);
  ctx11.bezierCurveTo(410, 230, 400, 250, 390, 250);
  ctx11.bezierCurveTo(300, 300, 50, 280, 70, 280);
  ctx11.quadraticCurveTo(25, 260, 30, 200);
  ctx11.bezierCurveTo(40, 100, 60, 50, 40, 120);
  ctx11.quadraticCurveTo(50, 85, 80, 80);
  ctx11.fillStyle = "#fff4ba";
  ctx11.fill();

  ctx11.font = "700 30px Quicksand";
  ctx11.fillStyle = "#a0f2f2";
  ctx11.textAlign = "center";
  ctx11.textBaseline = "middle";

  ctx11.fillText("FISIOTERAPIA", 210, 150);

  ctx11.font = "700 30px Quicksand";
  ctx11.fillStyle = "#a0f2f2";
  ctx11.textAlign = "center";
  ctx11.textBaseline = "middle";

  ctx11.fillText("NEUROPEDIÁTRICA", 210, 210);
}

// Bublble 2-2
document.fonts.ready.then(() => {
  drawBubble2_2();
});
function drawBubble2_2() {
  let canvas12 = document.getElementById("bubble9");
  let ctx12 = canvas12.getContext("2d");

  ctx12.beginPath();
  ctx12.moveTo(80, 80);
  ctx12.lineTo(300, 60);
  ctx12.bezierCurveTo(350, 60, 380, 60, 400, 150);
  ctx12.bezierCurveTo(410, 230, 400, 250, 390, 250);
  ctx12.bezierCurveTo(300, 300, 50, 280, 70, 280);
  ctx12.quadraticCurveTo(25, 260, 30, 200);
  ctx12.bezierCurveTo(40, 100, 60, 50, 40, 120);
  ctx12.quadraticCurveTo(50, 85, 80, 80);
  ctx12.fillStyle = "#a0f2f2";
  ctx12.fill();

  ctx12.font = "700 30px Quicksand";
  ctx12.fillStyle = "#fff4ba";
  ctx12.textAlign = "center";
  ctx12.textBaseline = "middle";

  ctx12.fillText("FISIOTERAPIA", 210, 140);

  ctx12.font = "700 30px Quicksand";
  ctx12.fillStyle = "#fff4ba";
  ctx12.textAlign = "center";
  ctx12.textBaseline = "middle";

  ctx12.fillText("NEUROLÓGICA", 210, 180);

  ctx12.font = "700 30px Quicksand";
  ctx12.fillStyle = "#fff4ba";
  ctx12.textAlign = "center";
  ctx12.textBaseline = "middle";

  ctx12.fillText("ADULTOS", 210, 220);
}

// Bublble 3-1
document.fonts.ready.then(() => {
  drawBubble3_1();
});
function drawBubble3_1() {
  let canvas16 = document.getElementById("bubble10");
  let ctx16 = canvas16.getContext("2d");

  ctx16.beginPath();
  ctx16.moveTo(80, 80);
  ctx16.lineTo(300, 60);
  ctx16.bezierCurveTo(350, 60, 380, 60, 400, 150);
  ctx16.bezierCurveTo(410, 230, 400, 250, 390, 250);
  ctx16.bezierCurveTo(300, 300, 50, 280, 70, 280);
  ctx16.quadraticCurveTo(25, 260, 30, 200);
  ctx16.bezierCurveTo(40, 100, 60, 50, 40, 120);
  ctx16.quadraticCurveTo(50, 85, 80, 80);
  ctx16.fillStyle = "#a0f2f2";
  ctx16.fill();

  ctx16.font = "700 25px Quicksand";
  ctx16.fillStyle = "#fff4ba";
  ctx16.textAlign = "center";
  ctx16.textBaseline = "middle";

  ctx16.fillText("FISIOTERAPIA", 215, 140);

  ctx16.font = "700 25px Quicksand";
  ctx16.fillStyle = "#fff4ba";
  ctx16.textAlign = "center";
  ctx16.textBaseline = "middle";

  ctx16.fillText("MÚSCULO-ESQUELÉTICA", 215, 180);

  ctx16.font = "700 45px Quicksand";
  ctx16.fillStyle = "#fff4ba";
  ctx16.textAlign = "center";
  ctx16.textBaseline = "middle";

  ctx16.fillText("INFANTIL", 215, 225);
}

// Bublble 3-2
document.fonts.ready.then(() => {
  drawBubble3_2();
});
function drawBubble3_2() {
  let canvas17 = document.getElementById("bubble11");
  let ctx17 = canvas17.getContext("2d");

  ctx17.beginPath();
  ctx17.moveTo(80, 80);
  ctx17.lineTo(300, 60);
  ctx17.bezierCurveTo(350, 60, 380, 60, 400, 150);
  ctx17.bezierCurveTo(410, 230, 400, 250, 390, 250);
  ctx17.bezierCurveTo(300, 300, 50, 280, 70, 280);
  ctx17.quadraticCurveTo(25, 260, 30, 200);
  ctx17.bezierCurveTo(40, 100, 60, 50, 40, 120);
  ctx17.quadraticCurveTo(50, 85, 80, 80);
  ctx17.fillStyle = "#fff4ba";
  ctx17.fill();

  ctx17.font = "700 25px Quicksand";
  ctx17.fillStyle = "#f2bdd6";
  ctx17.textAlign = "center";
  ctx17.textBaseline = "middle";

  ctx17.fillText("FISIOTERAPIA", 215, 140);

  ctx17.font = "700 25px Quicksand";
  ctx17.fillStyle = "#f2bdd6";
  ctx17.textAlign = "center";
  ctx17.textBaseline = "middle";

  ctx17.fillText("MÚSCULO-ESQUELÉTICA", 215, 180);

  ctx17.font = "700 45px Quicksand";
  ctx17.fillStyle = "#f2bdd6";
  ctx17.textAlign = "center";
  ctx17.textBaseline = "middle";

  ctx17.fillText("ADULTOS", 215, 225);
}

// Bublble 4-1 (Prenancy and Post-birth)
document.fonts.ready.then(() => {
  drawBubble4_1();
});
function drawBubble4_1() {
  let canvas18 = document.getElementById("bubble12");
  let ctx18 = canvas18.getContext("2d");

  ctx18.beginPath();
  ctx18.moveTo(80, 80);
  ctx18.lineTo(300, 60);
  ctx18.bezierCurveTo(350, 60, 380, 60, 400, 150);
  ctx18.bezierCurveTo(410, 230, 400, 250, 390, 250);
  ctx18.bezierCurveTo(300, 300, 50, 280, 70, 280);
  ctx18.quadraticCurveTo(25, 260, 30, 200);
  ctx18.bezierCurveTo(40, 100, 60, 50, 40, 120);
  ctx18.quadraticCurveTo(50, 85, 80, 80);
  ctx18.fillStyle = "#f2bdd6";
  ctx18.fill();

  ctx18.font = "700 50px Quicksand";
  ctx18.fillStyle = "#177362";
  ctx18.textAlign = "center";
  ctx18.textBaseline = "middle";

  ctx18.fillText("EMBARAZO", 215, 180);
}

// Bublble 4-2 (Prenancy and Post-birth)
document.fonts.ready.then(() => {
  drawBubble4_2();
});
function drawBubble4_2() {
  let canvas19 = document.getElementById("bubble13");
  let ctx19 = canvas19.getContext("2d");

  ctx19.beginPath();
  ctx19.moveTo(80, 80);
  ctx19.lineTo(300, 60);
  ctx19.bezierCurveTo(350, 60, 380, 60, 400, 150);
  ctx19.bezierCurveTo(410, 230, 400, 250, 390, 250);
  ctx19.bezierCurveTo(300, 300, 50, 280, 70, 280);
  ctx19.quadraticCurveTo(25, 260, 30, 200);
  ctx19.bezierCurveTo(40, 100, 60, 50, 40, 120);
  ctx19.quadraticCurveTo(50, 85, 80, 80);
  ctx19.fillStyle = "#177362";
  ctx19.fill();

  ctx19.font = "700 50px Quicksand";
  ctx19.fillStyle = "#f2bdd6";
  ctx19.textAlign = "center";
  ctx19.textBaseline = "middle";

  ctx19.fillText("POSTPARTO", 215, 180);
}
