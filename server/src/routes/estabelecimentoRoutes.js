import express from 'express';
import { EstabelecimentoController } from '../controllers/estabelecimentoController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import Proposta from '../models/Proposta.js';
import BandCover from '../models/BandaCover.js';

const router = express.Router();

// Rotas públicas
router.post('/estabelecimentos', EstabelecimentoController.create);
router.get('/estabelecimentos', EstabelecimentoController.index);
router.get('/estabelecimentos/:id', EstabelecimentoController.show);

// Rotas protegidas
router.get('/estabelecimento/perfil', authMiddleware, EstabelecimentoController.getPerfil);
router.put('/estabelecimento/update', authMiddleware, EstabelecimentoController.updatePerfil); 
router.delete('/estabelecimento/delete', authMiddleware, EstabelecimentoController.delete);

router.get('/estabelecimento/propostas', authMiddleware, async (req, res) => {
    const estabelecimentoId = req.userId; 
  
    try {
      const propostas = await Proposta.findAll({
        where: { estabelecimentoId },
        include: [{ model: BandCover, attributes: ['nomeCover', 'email'] }],
      });
      res.status(200).json(propostas);
    } catch (error) {
      console.error('Erro ao buscar histórico de propostas:', error);
      res.status(500).json({ error: 'Erro ao buscar histórico de propostas' });
    }
  });

export default router;