const express = require('express');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error_handler')

const app = express();
const port = 3000;

// Add middleware
app.use(express.json());
routerApi(app);
// el orden en que se usa, es como se corre
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Servidor corriendo en el puerto ' + port)
});
