const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Star = sequelize.define('Star', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });

  return Star;
};
