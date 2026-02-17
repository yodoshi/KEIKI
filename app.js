const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
const { MailerSend, EmailParams, Sender, Recipient } = require("mailersend");

const app = express();

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const sentFrom = new Sender("user@keikifisioterapia.es", "KEIKI WEB");

const recipients = [
  new Recipient("noelia.valiente@keikifisioterapia.es", "Your Client"),
];

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
    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(sentFrom)
      .setSubject("KEIKI PACIENTE! - Nueva Solicitud de Cita")
      .setHtml(mailBody);

    const response = await mailerSend.email.send(emailParams);

    console.log("Respuesta de MailerSend:", JSON.stringify(response, null, 2));
    res.status(200).send("ok");
  } catch (err) {
    console.error("ERROR ENVIANDO EMAIL:", err);
    res.status(500).send(err.message);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App runing on port ${port}`);
});
