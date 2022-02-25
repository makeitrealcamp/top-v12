const Busboy = require("busboy");
const cloudinary = require("cloudinary").v2;

// configurar cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

formData = (req, res, next) => {
  let uploadingFile = false;
  let updaloadingCount = 0;

  // vamos a crear una función para saber cuando hemos
  // terminado de cargar las imagenes
  function done() {
    if (uploadingFile) return;
    if (updaloadingCount > 0) return;

    next();
  }

  const busboy = Busboy({ headers: req.headers });

  req.body = {};

  busboy.on("file", async (key, file) => {
    uploadingFile = true;
    updaloadingCount++;

    const upload = await cloudinary.uploader.upload_stream(
      { upload_stream: "MakeItReal" },
      (err, res) => {
        console.log("updload", res, err);
        if (err) throw new Error("Somenthin went wrong");

        req.body[key] = res;
        uploadingFile = false;
        updaloadingCount--;
        done();
      }
    );

    file.on("data", (data) => {
      upload.write(data);
    });

    file.on("end", () => {
      upload.end();
    });
  });

  busboy.on("finish", () => {
    console.log("finish");
    done();
  });

  req.pipe(busboy);
};

module.exports = formData;
