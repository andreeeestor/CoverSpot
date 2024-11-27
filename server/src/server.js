import express from 'express';
import cors from 'cors';
import sequelize from './config/db.js';
import estabelecimentoRoutes from "./routes/estabelecimentoRoutes.js";
import bandaCoverRoutes from "./routes/bandaRoutes.js";
import authRoutes from './routes/authRoutes.js';
import propostaRoutes from './routes/propostaRoutes.js'; 
import eventRoutes from "./routes/eventRoutes.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', estabelecimentoRoutes);
app.use('/api', bandaCoverRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', propostaRoutes);  
app.use('/api', eventRoutes);

sequelize.sync({ force: true })
  .then(() => {
    console.log('Banco de dados sincronizado');
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao sincronizar banco de dados:', error);
  });

export default app;
