import BandCover from '../models/BandaCover.js';

export const loginBanda = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const banda = await BandCover.findOne({ where: { email, senha } });
    if (banda) {
      res.status(200).json({ message: 'Login bem-sucedido' });
    } else {
      res.status(401).json({ error: 'Credenciais inválidas' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
};

export const listarBandas = async (req, res) => {
  const bandas = await BandCover.findAll();
  res.status(200).json(bandas);
};

export const criarBanda = async (req, res) => {
  try {
    const banda = await BandCover.create(req.body);
    res.status(201).json(banda);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
