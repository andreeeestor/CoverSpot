import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const BandCover = sequelize.define("BandCover", {
  nomeCover: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: { msg: "O nome da banda não pode ser vazio." },
    },
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "O nome não pode ser vazio." },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: { msg: "O email deve ser válido." },
      notEmpty: { msg: "O email não pode ser vazio." },
    },
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "O telefone não pode ser vazio." },
    },
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "A senha não pode ser vazia." },
    },
  },
  generoMusical: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "O gênero musical não pode ser vazio." },
    },
  },
  biografia: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  portfolio: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  disponibilidade: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "Disponível",
  },
  resetToken: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  resetTokenExpiry: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

export default BandCover;
