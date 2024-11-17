import express from 'express';
import { BandaCoverController } from '../controllers/bandaCoverController.js';

const router = express.Router();

router.post('/bandas-cover', BandaCoverController.create);
router.get('/bandas-cover', BandaCoverController.index);
router.get('/bandas-cover/:id', BandaCoverController.show);
router.put('/bandas-cover/:id', BandaCoverController.update);
router.delete('/bandas-cover/:id', BandaCoverController.delete);

export default router;
