import express from 'express';
import { loginBanda, listarBandas, criarBanda } from '../controllers/bandaCoverController.js';

const router = express.Router();

router.post('/login', loginBanda);
router.get('/', listarBandas);
router.post('/', criarBanda);

export default router;
