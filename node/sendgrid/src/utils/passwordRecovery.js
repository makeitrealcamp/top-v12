const { welcomeMail } = require("./mailer");

const url = process.env.URL_FRONT || "http://localhost:3000";
exports.recoveryPassword = (email, token) => {
  console.log("here");
  return welcomeMail({
    to: email,
    from: "cindy280394@gmail.com",
    subject: `Recuperación de contraseña`,
    text: "Hola, para recuperar tu contraseña por favor haz click en el siguiente enlace:",
    html: `
            <div>
              <h1> Recuperación de contraseña </h1>
              <a href=${url}/password-reset/${token}>Recuperar contraseña</a>
            </div>
          `,
  });
};
