const express = require('express');
const { Category } = require('../models');
const router = express.Router();

// CRUD operations for categories
router.post('/', async (req, res) => {
  const category = await Category.create(req.body);
  res.send(category);
});

router.get('/', async (req, res) => {
  const categories = await Category.findAll();
  res.send(categories);
});

router.get('/:id', async (req, res) => {
  const category = await Category.findByPk(req.params.id);
  res.send(category);
});

router.put('/:id', async (req, res) => {
  await Category.update(req.body, { where: { id: req.params.id } });
  const updatedCategory = await Category.findByPk(req.params.id);
  res.send(updatedCategory);
});

router.delete('/:id', async (req, res) => {
  await Category.destroy({ where: { id: req.params.id } });
  res.send({ message: 'Category deleted' });
});

module.exports = router;
