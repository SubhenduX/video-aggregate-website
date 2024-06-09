const express = require('express');
const Category = require('../models/Category');
const router = express.Router();

// CRUD operations for categories
router.post('/', async (req, res) => {
    const category = new Category(req.body);
    await category.save();
    res.send(category);
});

router.get('/', async (req, res) => {
    const categories = await Category.find();
    res.send(categories);
});

router.get('/:id', async (req, res) => {
    const category = await Category.findById(req.params.id);
    res.send(category);
});

router.put('/:id', async (req, res) => {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(category);
});

router.delete('/:id', async (req, res) => {
    await Category.findByIdAndDelete(req.params.id);
    res.send({ message: 'Category deleted' });
});

module.exports = router;
