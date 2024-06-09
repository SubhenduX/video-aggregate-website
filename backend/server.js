const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const { sequelize } = require('./models');
const videoRoutes = require('./routes/videos');
const categoryRoutes = require('./routes/categories');
const starRoutes = require('./routes/stars');

app.use('/videos', videoRoutes);
app.use('/categories', categoryRoutes);
app.use('/stars', starRoutes);

sequelize.sync().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
