const express = require('express');
const path =  require('path');
const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, './public')));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname,'./views/index.html')));
app.get('/register', (req, res) => res.sendFile(path.resolve(__dirname,'./views/register.html')));
app.get('/carrito', (req,res) => res.sendFile(path.resolve(__dirname,'views/product-cart.html')));
app.get('/detalle', (req,res) => res.sendFile(path.resolve(__dirname,'views/productDetail.html')));
app.get('/ingresar', (req,res) => res.sendFile(path.resolve(__dirname,'views/login.html')));
app.get('/contacto', (req,res) => res.sendFile(path.resolve(__dirname,'views/contacto.html')));

app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}!`));


