const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const videoRoutes = require('./routes/videos');
const categoryRoutes = require('./routes/categories');
const starRoutes = require('./routes/stars');

app.use('/api/videos', videoRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/stars', starRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
