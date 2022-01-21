var fs = require('fs');

fs.writeFile("nuevo.txt", "Primera lÃ­nea\nSegunda lÃ­nea", function(err) {
  if (err) {
    return console.log(err);
  }

  console.log("El archivo fue creado correctamente");
});
