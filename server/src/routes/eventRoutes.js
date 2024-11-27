import express from 'express';
import { getEventosConfirmados } from '../controllers/eventController.js';
const router = express.Router();

router.get('/eventos-confirmados', getEventosConfirmados);

export default router;
