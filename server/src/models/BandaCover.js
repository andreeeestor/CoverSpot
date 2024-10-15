import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

const BandaCover = sequelize.define('BandaCover', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  nomeCover: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  generoMusical: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  biografia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  portfolio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  disponibilidade: {
    type: DataTypes.TIME,
    allowNull: false,
  },
});

export default BandaCover;
