import express from 'express';
import { BandaCoverController } from '../controllers/bandaCoverController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Rotas públicas
router.post('/bandas-cover', BandaCoverController.create);
router.get('/bandas-cover', BandaCoverController.index);
router.get('/bandas-cover/:id', BandaCoverController.show);

// Rotas autenticadas
router.get('/banda/perfil', authMiddleware, BandaCoverController.getPerfil);
router.put('/banda/update', authMiddleware, BandaCoverController.updatePerfil);
router.delete('/banda/delete', authMiddleware, BandaCoverController.delete);

router.get('/banda/propostas', authMiddleware, BandaCoverController.getPropostas);

export default router;