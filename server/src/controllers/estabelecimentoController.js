import Estabelecimento from '../models/Estabelecimento.js';

export const listarEstabelecimentos = async (req, res) => {
  const estabelecimentos = await Estabelecimento.findAll();
  res.status(200).json(estabelecimentos);
};

export const criarEstabelecimento = async (req, res) => {
  try {
    const estabelecimento = await Estabelecimento.create(req.body);
    res.status(201).json(estabelecimento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
