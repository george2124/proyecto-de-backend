const express = require("express");
const app = express();
const {  Router  } = express;
const PORT = process.env.PORT || 8080;
const router = Router();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(require('./routes/productos'));
app.use(require('./routes/carrito'));