const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    title: String,
    description: String,
    iframe_link: String,
    category_id: mongoose.Schema.Types.ObjectId,
    star_id: mongoose.Schema.Types.ObjectId,
    channel: String,
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 }
});

module.exports = mongoose.model('Video', VideoSchema);
