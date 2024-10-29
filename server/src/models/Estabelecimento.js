import { DataTypes } from 'sequelize';
import sequelize from "../config/db.js";

const Estabelecimento = sequelize.define('Estabelecimento', {
  nome: DataTypes.STRING,
  cnpj: DataTypes.STRING,
  email: DataTypes.STRING,
  telefone: DataTypes.STRING,
  senha: DataTypes.STRING,
  endereco: DataTypes.STRING,
  tipoEndereco: DataTypes.STRING,
  descricao: DataTypes.TEXT,
  horarioFuncionamento: DataTypes.STRING,
  capacidade: DataTypes.INTEGER,
  preferenciaMusical: DataTypes.STRING,
});

export default Estabelecimento;
