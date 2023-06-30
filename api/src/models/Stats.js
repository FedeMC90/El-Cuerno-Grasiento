const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('stats', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    strength: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dexterity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    constitution: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    intelligence: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    wisdom: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    charisma: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hp: { /* Hit Points */
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ac: { /* Armor Class */
      type: DataTypes.INTEGER,
      allowNull: false
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    initiative: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fortitude: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reflexes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    willpower: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    base_attack: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    prey: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  },
  {timestamps: false})
};
