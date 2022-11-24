const express = require("express");
const router = Router();



let products = [
    { id: 100, product: 'la mejor pelota', category: 'boca', price: 100},
    { id: 101, product: 'una pelota cualquiera', category: 'river', price: 10},
    { id: 102, product: 'paleta de ping-pong', category: 'ping-pong', price: 300},
    
]


app.get('/api/products', async (req, res) => {
    res.json(products);
  });


//GET CON QUERY TIPO SEARCH (OJO QUE ES EL MISMO!)
app.get('/', (req, res) => {
  const { query } = req;
  const product = products.find ((product) => product.id == query)
  res.json(product);
});

//GET CON ID IDENTIFICADOR EN LA URL TIPO PARAMS
app.get('/:id', (req, res) => {
  const { id } = req.params;
});

//POST CON BODY (SIN ID!!)
app.post('/', (req, res) => {
  const { body } = req;
  products.push(body);
  res.json(body);
});

//PUT CON ID PARAMS SIEMPRE y BODY!
app.put('/:id', (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const arregloNuevo= products.filter((product) => product.id != id);
  arregloNuevo.push(body);
  res.json(body);
  products = arregloNuevo;
 });

//DELETE CON ID PARAMS SIEMPRE
app.delete('/:id', (req, res) => {
  const { id } = req.params;  
  const eliminoProduct = products.filter((product)=> product.id != id);
  products = eliminoProduct
});


module.exports = router;