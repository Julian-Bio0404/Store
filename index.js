const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Product 1',
      price: 1000
    },
    {
      name: 'Product 2',
      price: 990
    }
  ]);
});

app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  res.json({
    id,
    name: 'Product ' + id,
    price: 1000
  });
});

app.listen(port, () => {
  console.log('Servidor corriendo en el puerto ' + port)
});
