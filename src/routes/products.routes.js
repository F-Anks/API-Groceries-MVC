import {Router} from 'express';
import productsController from '../controllers/products.controller.js';
const router = Router();

router.get('/getAll', productsController.getAll);

export default router;