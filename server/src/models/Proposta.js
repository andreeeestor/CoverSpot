import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import BandCover from './BandaCover.js';
import Estabelecimento from './Estabelecimento.js';

const Proposta = sequelize.define('Proposta', {
  mensagem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dataEvento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  horaInicio: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  horaFim: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cacheEvento: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pendente', // Valores: pendente, aceita, recusada
  },
});

// Relacionamentos
Proposta.belongsTo(BandCover, { foreignKey: 'bandaId' });
Proposta.belongsTo(Estabelecimento, { foreignKey: 'estabelecimentoId' });

export default Proposta;
