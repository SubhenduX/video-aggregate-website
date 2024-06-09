const express = require('express');
const Video = require('../models/Video');
const router = express.Router();

// CRUD operations for videos
router.post('/', async (req, res) => {
    const video = new Video(req.body);
    await video.save();
    res.send(video);
});

router.get('/', async (req, res) => {
    const videos = await Video.find();
    res.send(videos);
});

router.get('/:id', async (req, res) => {
    const video = await Video.findById(req.params.id);
    res.send(video);
});

router.put('/:id', async (req, res) => {
    const video = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(video);
});

router.delete('/:id', async (req, res) => {
    await Video.findByIdAndDelete(req.params.id);
    res.send({ message: 'Video deleted' });
});

module.exports = router;
