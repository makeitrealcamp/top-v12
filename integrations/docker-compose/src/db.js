const mongoose = require("mongoose");

function connect() {
  const url = process.env.MONGO_URL || 'mongodb://mongo/mongo-in-docker';

  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.once("open", () => {
    console.log("Connection established successfully");
  });
}

module.exports = { connect };
