import { useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);

  // Con está función formateamos la imagen para leerla como una imagen
  function readFile(file) {
    const reader = new FileReader();

    reader.onload = (e) => setImage(e.target.result);
    // reader.onload = e => console.log(e.target.result)

    reader.readAsDataURL(file);
  }

  const handleChange = (event) => {
    console.log("here", event.target.files);
    // si quisieramos previsualizar la imagen
    if (event.target.files.length > 0) {
      readFile(event.target.files[0]);
    }
    setFile(event.target.files);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    // Creamos un objeto al que podemos luego pasarle diferentes valores
    // para enviar un formulario con multipart/form-data
    const data = new FormData();
    if (file) {
      console.log(typeof file);
      for (let i = 0; i < file.length; i++) {
        // Con el metodo append vamos agregando los archivos
        // y si tuvieramos otros campos también
        data.append("file", file[i], file[i].name);
      }
    }

    const response = await axios({
      method: "POST",
      baseURL: "http://localhost:8000",
      url: "/profile",
      data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="file">Imagen</label>
        <input
          type="file"
          accept="image/*"
          name="file"
          id="file"
          onChange={handleChange}
        />
        <input type="submit" value="Enviar" />
      </form>
      <br />
      {!!image && <img src={image} alt="upload preview" width={150} />}
    </div>
  );
}

export default App;
