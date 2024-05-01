const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// Middleware para analizar cuerpos de solicitud JSON
app.use(bodyParser.json());

// Configuración de la base de datos SQLite
const db = new sqlite3.Database('database.db');

// Crear la tabla de usuarios si no existe
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT NOT NULL, password TEXT NOT NULL)");
});

// Endpoint para registrar un nuevo usuario
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }
    db.run("INSERT INTO users (username, password) VALUES (?, ?)", [username, password], (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to register user' });
        }
        return res.status(201).json({ message: 'User registered successfully' });
    });
});

// Endpoint para iniciar sesión
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }
    db.get("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], (err, user) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to authenticate user' });
        }
        if (!user) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }
        return res.status(200).json({ message: 'Login successful' });
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Backend running on http://localhost:${port}`);
});
