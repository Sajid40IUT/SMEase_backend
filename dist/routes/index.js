import express from 'express';
import employeeRoutes from './employee.js';
import supplierRoutes from './supplier.js';
import productRoutes from './product.js';
import saleRoutes from './sale.js';
import payrollPeriodRoutes from './payrollPeriod.js';
import payslipRoutes from './payslip.js';
import taxDocumentRoutes from './taxDocument.js';
const router = express.Router();
router.use('/employees', employeeRoutes);
router.use('/suppliers', supplierRoutes);
router.use('/products', productRoutes);
router.use('/sales', saleRoutes);
router.use('/payroll-periods', payrollPeriodRoutes);
router.use('/payslips', payslipRoutes);
router.use('/tax-documents', taxDocumentRoutes);
export default router;
//# sourceMappingURL=index.js.map