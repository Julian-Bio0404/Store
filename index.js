const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

// Add middleware
app.use(express.json());
routerApi(app);

app.listen(port, () => {
  console.log('Servidor corriendo en el puerto ' + port)
});
