require("dotenv").config();
const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const cors = require("cors");
const { connect } = require("./src/db");

const port = process.env.PORT || 8000;
const app = express();
connect();

app.use(cors());
app.use(express.json());

app.post("/profile", upload.single("file"), (req, res) => {
  // req.file es el archivo 'file', el nombre original se puede obtener
  const { file } = req;
  if (!file) throw new Error("Does not exist");

  console.log("here", file);
  res.send("Success");
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
