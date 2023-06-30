const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('character', {
    character_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    creation_date: {
      type: DataTypes.DATEONLY
    },
    image: {
      type: DataTypes.STRING
    },
    classs: {
      type: DataTypes.STRING
    },
    lvl: {
      type: DataTypes.STRING
    },
    race: {
      type: DataTypes.STRING
    },
    deity: {
      type: DataTypes.STRING
    },
    height: {
      type: DataTypes.FLOAT
    },
    weight: {
      type: DataTypes.INTEGER
    },
    alignment: {
      type: DataTypes.STRING
    },
    size: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.ENUM("F", "M")
    },
    eyes: {
      type: DataTypes.STRING
    },
    hair: {
      type: DataTypes.STRING
    },
    skin: {
      type: DataTypes.STRING
    }
  }, {timestamps: false});
};
