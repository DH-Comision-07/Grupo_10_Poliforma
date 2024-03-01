const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) );

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})

app.get('/productDetail.html', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'))
})

app.get('/login.html', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})

app.get('/register.html', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.listen(3030,() => console.log('servidor corriendo en el puerto 3030'));