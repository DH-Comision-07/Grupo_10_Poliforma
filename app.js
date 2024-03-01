const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) );

app.get('/productCart', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/productCart.html'))
})

app.listen(3030,() => console.log('servidor corriendo en el puerto 3030'));