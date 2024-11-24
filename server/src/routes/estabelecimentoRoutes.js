import express from 'express';
import { EstabelecimentoController } from '../controllers/estabelecimentoController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Rotas públicas
router.post('/estabelecimentos', EstabelecimentoController.create);
router.get('/estabelecimentos', EstabelecimentoController.index);
router.get('/estabelecimentos/:id', EstabelecimentoController.show);

// Rotas protegidas
router.get('/estabelecimento/perfil', authMiddleware, EstabelecimentoController.getPerfil);
router.put('/estabelecimento/update', authMiddleware, EstabelecimentoController.updatePerfil); // Nova rota
router.delete('/estabelecimento/delete', authMiddleware, EstabelecimentoController.delete);

export default router;