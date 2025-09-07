import { PrismaClient } from '../../generated/prisma/index.js';
const prisma = new PrismaClient();
async function getAllSales(req, res) {
    try {
        const sales = await prisma.employee_Product_Sale.findMany();
        res.json(sales);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch sales' });
    }
}
async function getSaleById(req, res) {
    try {
        const sale = await prisma.employee_Product_Sale.findUnique({
            where: { sale_id: Number(req.params.id) },
        });
        if (!sale)
            return res.status(404).json({ error: 'Sale not found' });
        res.json(sale);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch sale' });
    }
}
async function createSale(req, res) {
    try {
        const sale = await prisma.employee_Product_Sale.create({
            data: req.body,
        });
        res.status(201).json(sale);
    }
    catch (error) {
        res.status(400).json({ error: 'Failed to create sale', details: error.message });
    }
}
async function updateSale(req, res) {
    try {
        const sale = await prisma.employee_Product_Sale.update({
            where: { sale_id: Number(req.params.id) },
            data: req.body,
        });
        res.json(sale);
    }
    catch (error) {
        res.status(400).json({ error: 'Failed to update sale', details: error.message });
    }
}
async function deleteSale(req, res) {
    try {
        await prisma.employee_Product_Sale.delete({
            where: { sale_id: Number(req.params.id) },
        });
        res.status(204).send();
    }
    catch (error) {
        res.status(400).json({ error: 'Failed to delete sale', details: error.message });
    }
}
export { getAllSales, getSaleById, createSale, updateSale, deleteSale, };
//# sourceMappingURL=saleController.js.map