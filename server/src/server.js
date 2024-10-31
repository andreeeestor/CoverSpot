import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sequelize from './config/db.js';
import bandaRoutes from './routes/bandaRoutes.js';
import estabelecimentoRoutes from './routes/estabelecimentoRoutes.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/bandas', bandaRoutes);
app.use('/estabelecimentos', estabelecimentoRoutes);

sequelize.sync().then(() => {
  console.log('Database synchronized');
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
