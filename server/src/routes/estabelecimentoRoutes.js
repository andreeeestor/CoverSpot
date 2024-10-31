import express from 'express';
import { listarEstabelecimentos, criarEstabelecimento } from '../controllers/estabelecimentoController.js';

const router = express.Router();

router.get('/', listarEstabelecimentos);
router.post('/', criarEstabelecimento);

export default router;
