import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const BandCover = sequelize.define('BandCover', {
  nomeCover: DataTypes.STRING,
  nome: DataTypes.STRING,
  email: DataTypes.STRING,
  telefone: DataTypes.STRING,
  senha: DataTypes.STRING,
  generoMusical: DataTypes.STRING,
  biografia: DataTypes.TEXT,
  portfolio: DataTypes.TEXT,
  disponibilidade: DataTypes.STRING,
});

export default BandCover;
