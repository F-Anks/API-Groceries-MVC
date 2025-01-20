import {Router} from 'express';
import productsController from '../controllers/products.controller.js';
const router = Router();

router.get('/getAll', productsController.getAll);
router.get('/getOne/:barcode', productsController.getOne);

export default router;