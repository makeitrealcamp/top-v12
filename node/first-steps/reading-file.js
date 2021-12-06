var fs = require('fs');

fs.readFile('contenido.txt', 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }

  console.log(data);
});
