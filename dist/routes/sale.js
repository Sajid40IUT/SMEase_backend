import express from 'express';
import { getAllSales, getSaleById, createSale, updateSale, deleteSale } from '../controllers/saleController.js';
const router = express.Router();
router.get('/', getAllSales);
router.get('/:id', getSaleById);
router.post('/', createSale);
router.put('/:id', updateSale);
router.delete('/:id', deleteSale);
export default router;
//# sourceMappingURL=sale.js.map