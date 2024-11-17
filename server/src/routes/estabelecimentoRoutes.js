import express from 'express';
import { EstabelecimentoController } from '../controllers/estabelecimentoController.js';

const router = express.Router();

router.post('/estabelecimentos', EstabelecimentoController.create);
router.get('/estabelecimentos', EstabelecimentoController.index);
router.get('/estabelecimentos/:id', EstabelecimentoController.show);
router.put('/estabelecimentos/:id', EstabelecimentoController.update);
router.delete('/estabelecimentos/:id', EstabelecimentoController.delete);

export default router;