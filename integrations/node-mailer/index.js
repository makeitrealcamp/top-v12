const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const userName = "Luis"

app.get("/send-email", async (req, res) => {
  const transporter = await createFakeTransporter();

  const email = await transporter.sendMail({
    from: '"Make it Real" <makeitreal@example.com>',
    to: "goye@yopmail.com",
    subject: "Mensaje de bienvenida ✔", // Asunto
    text: `
      Bienvenido,

      Hello World ${userName}
    `, // Contenido plano (texto)
    html: `
      <div style='font-size: 22px; background-color: #1E242A; color: white'>
        <strong> Bienvenido a bordo ${userName}! </strong>
      </div>
    `, // Contenido HTML
  });

  // Vista previa del correo (sólo para el transporte falso de pruebas)
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(email));

  res.sendStatus(200);
})

async function createFakeTransporter() {
  let testAccount = await nodemailer.createTestAccount();

  return nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
}

app.listen(3000, () => console.log('Listening on port 3000!'));
