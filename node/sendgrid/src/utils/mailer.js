const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const welcomeMail = async (message) => {
  try {
    await sgMail.send(message);
    console.log("Message sent successfully");
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
};

exports.sendMail = (user) => {
  return welcomeMail({
    to: user.email,
    from: "cindy280394@gmail.com",
    subject: `Bienvenid@ ${user.name} a Make It Real`,
    text: "¡Don't stop learning!",
  });
};
