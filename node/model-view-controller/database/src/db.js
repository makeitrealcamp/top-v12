const mongoose = require("mongoose");

function connect() {
  mongoose.connect("mongodb://localhost:27017/references", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.once("open", () => {
    console.log("Connection established successfully");
  });
}

module.exports = { connect };
