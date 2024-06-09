const express = require('express');
const Star = require('../models/Star');
const router = express.Router();

// CRUD operations for stars
router.post('/', async (req, res) => {
    const star = new Star(req.body);
    await star.save();
    res.send(star);
});

router.get('/', async (req, res) => {
    const stars = await Star.find();
    res.send(stars);
});

router.get('/:id', async (req, res) => {
    const star = await Star.findById(req.params.id);
    res.send(star);
});

router.put('/:id', async (req, res) => {
    const star = await Star.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(star);
});

router.delete('/:id', async (req, res) => {
    await Star.findByIdAndDelete(req.params.id);
    res.send({ message: 'Star deleted' });
});

module.exports = router;
