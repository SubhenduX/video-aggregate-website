const express = require('express');
const { Star } = require('../models');
const router = express.Router();

// CRUD operations for stars
router.post('/', async (req, res) => {
  const star = await Star.create(req.body);
  res.send(star);
});

router.get('/', async (req, res) => {
  const stars = await Star.findAll();
  res.send(stars);
});

router.get('/:id', async (req, res) => {
  const star = await Star.findByPk(req.params.id);
  res.send(star);
});

router.put('/:id', async (req, res) => {
  await Star.update(req.body, { where: { id: req.params.id } });
  const updatedStar = await Star.findByPk(req.params.id);
  res.send(updatedStar);
});

router.delete('/:id', async (req, res) => {
  await Star.destroy({ where: { id: req.params.id } });
  res.send({ message: 'Star deleted' });
});

module.exports = router;
