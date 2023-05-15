const fs = require('fs');

const filePath = 'android/app/client_secret.json';
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const updatedContent = data.replace(/#{GOOGLE_PRIVATE_KEY}#/g, GOOGLE_PRIVATE_KEY);

  fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log('Archivo actualizado con éxito.');
  });
  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log('Contenido del archivo:');
    console.log(data);
  });
});
