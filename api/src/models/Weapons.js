const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('weapons', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    attack: {
      type: DataTypes.INTEGER
    },
    tab: {  /* Total Attack Bonus */
      type: DataTypes.INTEGER
    },
    damage: {
      type: DataTypes.STRING
    },
    critic: {
      type: DataTypes.STRING
    },
    range: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    },
    ammunition: {
      type: DataTypes.INTEGER
    },
    notes: {
      type: DataTypes.TEXT
    },
  },
  {timestamps: false})
};
