import express from 'express';
import authController from 'src/controllers/auth';
const router = express.Router();

router.post('/login', authController.login);

router.post('/register', authController.register);

router.post('/logout', authController.logout);

router.get('/currentuser', authController.currentUser);

export default router;
