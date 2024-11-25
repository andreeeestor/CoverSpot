import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Mensagem = sequelize.define('Mensagem', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  chatId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  remetanteId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  conteudo: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  tipo: {
    type: DataTypes.ENUM('estabelecimento', 'banda'),
    allowNull: false
  },
  lida: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  tableName: 'mensagens',
  timestamps: true
});

export default Mensagem;