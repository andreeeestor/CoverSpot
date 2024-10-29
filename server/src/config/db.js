import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './cover_spot.db',
  // Isso aq é só para ver pelo console se os dados está sendo salvos 
  logging: console.log,
});

export default sequelize;
