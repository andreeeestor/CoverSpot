import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import BandCover from './models/BandaCover.js';
import Estabelecimento from './models/Estabelecimento.js';
import sequelize from './config/db.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

sequelize.sync().then(() => {
  console.log('Database synchronized');
});

app.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  const banda = await BandCover.findOne({ where: { email, senha } });
  if (banda) {
    res.status(200).json({ message: 'Login bem-sucedido' });
  } else {
    res.status(401).json({ error: 'Credenciais inválidas' });
  }
});

app.post('/estabelecimento', async (req, res) => {
  try {
    const estabelecimento = await Estabelecimento.create(req.body);
    res.status(201).json(estabelecimento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/cover', async (req, res) => {
  try {
    const banda = await BandCover.create(req.body);
    res.status(201).json(banda);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post("/cover", async (req, res) => {
  try {
    const novoCover = await CoverModel.create(req.body);

    const covers = await CoverModel.findAll(); 
    console.log("Registros atuais no banco:", covers);

    res.status(201).json(novoCover);
  } catch (error) {
    console.error("Erro ao salvar no banco:", error);
    res.status(500).json({ error: "Erro ao salvar no banco de dados." });
  }
});


app.get('/covers', async (req, res) => {
  const bandas = await BandCover.findAll();
  res.status(200).json(bandas);
});

app.get('/estabelecimentos', async (req, res) => {
  const estabelecimentos = await Estabelecimento.findAll();
  res.status(200).json(estabelecimentos);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
