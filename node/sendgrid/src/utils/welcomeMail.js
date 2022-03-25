const { welcomeMail } = require("./mailer");

exports.sendMail = (user) => {
  return welcomeMail({
    to: user.email,
    from: "cindy280394@gmail.com",
    subject: `Bienvenid@ ${user.name} a Make It Real`,
    text: "¡Don't stop learning!",
  });
};
