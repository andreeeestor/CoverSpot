import Proposta from '../models/Proposta.js';

export const PropostaController = {
  async create(req, res) {
    const {
      mensagem,
      dataEvento,
      horaInicio,
      horaFim,
      endereco,
      cacheEvento,
      bandaId
    } = req.body;
    const estabelecimentoId = req.userId; // Assumindo que o usuário autenticado é um estabelecimento

    try {
      const novaProposta = await Proposta.create({
        mensagem,
        dataEvento,
        horaInicio,
        horaFim,
        endereco,
        cacheEvento,
        bandaId,
        estabelecimentoId,
      });
      res.status(201).json(novaProposta);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao enviar proposta' });
    }
  },

  async atualizarStatus(req, res) {
    const { id } = req.params;
    const { status } = req.body; // "aceita" ou "recusada"

    try {
      const proposta = await Proposta.findByPk(id);
      if (!proposta) {
        return res.status(404).json({ error: 'Proposta não encontrada' });
      }

      proposta.status = status;
      await proposta.save();

      res.json({ message: `Proposta ${status}` });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar proposta' });
    }
  },
};
