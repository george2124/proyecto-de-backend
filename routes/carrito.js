const express = require("express");
const router = Router();



app.get('/api/carrito', async (req, res) => {
    res.json(products);
  });


//GET CON QUERY TIPO SEARCH (OJO QUE ES EL MISMO!)
app.get('/', (req, res) => {
  const { query } = req;
  
});

//GET CON ID IDENTIFICADOR EN LA URL TIPO PARAMS
app.get('/:id', (req, res) => {
  const { id } = req.params;
});

//POST CON BODY (SIN ID!!)
app.post('/', (req, res) => {
  const { body } = req;
  ;
});

//PUT CON ID PARAMS SIEMPRE y BODY!
app.put('/:id', (req, res) => {
  const { id } = req.params;
  const { body } = req;
 
 });

//DELETE CON ID PARAMS SIEMPRE
app.delete('/:id', (req, res) => {
  const { id } = req.params;  
 
});


module.exports = router;