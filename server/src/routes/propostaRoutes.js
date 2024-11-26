import express from 'express';
import { PropostaController } from '../controllers/propostaController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/propostas', authMiddleware, PropostaController.create);
router.put('/propostas/:id/status', authMiddleware, PropostaController.atualizarStatus);

export default router;
