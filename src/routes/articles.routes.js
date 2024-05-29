const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

// Crear un artículo
router.post('/', async (req, res) => {
    try {
        const article = new Article(req.body);
        await article.save();
        res.status(201).send(article);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Leer todos los artículos
router.get('/', async (req, res) => {
    try {
        const articles = await Article.find().populate('author');
        res.send(articles);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Leer un artículo por ID
router.get('/:id', async (req, res) => {
    try {
        const article = await Article.findById(req.params.id).populate('author');
        if (!article) {
            return res.status(404).send();
        }
        res.send(article);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Actualizar un artículo por ID
router.patch('/:id', async (req, res) => {
    try {
        const article = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!article) {
            return res.status(404).send();
        }
        res.send(article);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Eliminar un artículo por ID
router.delete('/:id', async (req, res) => {
    try {
        const article = await Article.findByIdAndDelete(req.params.id);
        if (!article) {
            return res.status(404).send();
        }
        res.send(article);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
