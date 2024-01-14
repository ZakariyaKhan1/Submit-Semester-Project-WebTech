import express from 'express';
import { getProducts, postProduct, deleteProduct ,editProduct} from '../controller/productController.js';

const router = express.Router();

router.get('/', getProducts);
router.post('/', postProduct);
router.delete('/:productId', deleteProduct);
router.put('/:id', editProduct);


export default router;
