const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.use(
  cors({
    origin: "*",
    methods: ["POST", "GET"],
  })
);

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post(`/api/contact`, async (req, res) => {
  let mailBody = `
  <p><strong><h3>Fecha/s:</h3></strong> ${req.body.fecha}</p>
  <p><strong><h3>Franja/s:</h3></strong></p>
  <ul>
    <li><p><strong>Mañana:</strong> ${req.body.mañana}</p></li>
    <li><p><strong>Tarde:</strong> ${req.body.tarde}</p></li>
  </ul>
  <p><strong><h3>Descripción:</h3></strong></p>
    ${req.body.solicitud}</p>
  <p><strong>Confirmar por</strong> ${req.body.medio} a/al ${req.body.medio_info}</p>`;

  try {
    await transporter.sendMail({
      from: "Prueba",
      to: "fran600351314@hotmail.com",
      subject: "KEIKI PACIENTE! - Nueva Solicitud de Cita",
      html: mailBody,
    });
    res.status(200).send("ok");
  } catch (err) {
    res.status(500).send("error");
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App runing on port ${port}`);
});
