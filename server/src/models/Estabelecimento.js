import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

const Estabelecimento = sequelize.define('Estabelecimento', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cnpj: {
    type: DataTypes.STRING(18),
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
  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipoEndereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  horarioFuncionamento: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  capacidade: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  preferenciaMusical: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default Estabelecimento;
