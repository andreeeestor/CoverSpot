import express from 'express';
import AuthController from '../controllers/AuthController.js';

const router = express.Router();

router.use((req, res, next) => {
    console.log('Auth Route accessed:', {
      method: req.method,
      path: req.path,
      body: req.body,
      headers: req.headers
    });
    next();
  });

router.post('/login', AuthController.login);
router.post('/request-reset', AuthController.requestPasswordReset);
router.post('/reset-password', AuthController.resetPassword);

export default router;