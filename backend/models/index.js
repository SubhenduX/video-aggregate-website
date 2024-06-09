const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.MYSQL_URI);

const Category = require('./Category')(sequelize);
const Star = require('./Star')(sequelize);
const Video = require('./Video')(sequelize);

Category.hasMany(Video, { foreignKey: 'categoryId' });
Star.hasMany(Video, { foreignKey: 'starId' });
Video.belongsTo(Category, { foreignKey: 'categoryId' });
Video.belongsTo(Star, { foreignKey: 'starId' });

module.exports = { sequelize, Category, Star, Video };
