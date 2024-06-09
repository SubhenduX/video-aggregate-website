const mongoose = require('mongoose');

const StarSchema = new mongoose.Schema({
    name: String,
    thumbnail: String,
    details: String
});

module.exports = mongoose.model('Star', StarSchema);
