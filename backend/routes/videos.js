const express = require('express');
const { Video } = require('../models');
const router = express.Router();

// CRUD operations for videos
router.post('/', async (req, res) => {
  const video = await Video.create(req.body);
  res.send(video);
});

router.get('/', async (req, res) => {
  const videos = await Video.findAll();
  res.send(videos);
});

router.get('/:id', async (req, res) => {
  const video = await Video.findByPk(req.params.id);
  res.send(video);
});

router.put('/:id', async (req, res) => {
  await Video.update(req.body, { where: { id: req.params.id } });
  const updatedVideo = await Video.findByPk(req.params.id);
  res.send(updatedVideo);
});

router.delete('/:id', async (req, res) => {
  await Video.destroy({ where: { id: req.params.id } });
  res.send({ message: 'Video deleted' });
});

module.exports = router;
