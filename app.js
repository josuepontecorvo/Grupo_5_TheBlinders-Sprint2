const express = require('express');
const path =  require('path');
const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, './public')));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname,"./views/index.html")));
app.get('/register', (req, res) => res.sendFile(path.resolve(__dirname,"./views/register.html")));
app.get("/carrito", (req,res) => res.sendFile(path.resolve(__dirname,"views/product-cart.html")));
app.listen(port, () => console.log(`Listening on port ${port}!`));
