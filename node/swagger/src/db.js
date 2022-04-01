const mongoose = require("mongoose");

function connect() {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.once("open", () => {
    console.log("Connection established successfully");
  });
}

module.exports = { connect };
