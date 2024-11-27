import Proposta from '../models/Proposta.js';  
import Estabelecimento from '../models/Estabelecimento.js';
import BandCover from '../models/BandaCover.js';

export const getEventosConfirmados = async (req, res) => {
  try {
    const eventos = await Proposta.findAll({
      where: { status: 'aceita' },
      include: [
        { model: Estabelecimento, attributes: ['nome', 'endereco'] },
        { model: BandCover, attributes: ['nomeCover', 'generoMusical'] }
      ]
    });
    res.json(eventos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar eventos confirmados.' });
  }
};
