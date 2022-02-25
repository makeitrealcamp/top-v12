require("dotenv").config();
const express = require("express");
// const multer = require("multer");
// const upload = multer({ dest: "uploads/" });
const cors = require("cors");
const { connect } = require("./src/db");
const formData = require("./src/utils/formData");

const port = process.env.PORT || 8000;
const app = express();
connect();

app.use(cors());
app.use(express.json());

// configuración con multer
// app.post("/profile", upload.single("file"), (req, res) => {
//   // req.file es el archivo 'file', el nombre original se puede obtener
//   const { file } = req;
//   if (!file) throw new Error("Does not exist");

//   console.log("here", file);
//   res.send("Success");
// });

app.post("/profile", formData, (req, res) => {
  console.log("endpoint", req.body);

  res.status(200).send({ imagen: req.body });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
