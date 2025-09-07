import { PrismaClient } from '../../generated/prisma/index.js';
const prisma = new PrismaClient();
async function getAllProducts(req, res) {
    try {
        const products = await prisma.product.findMany({
            include: {
                supplier: true
            }
        });
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
}
async function getProductById(req, res) {
    try {
        const product = await prisma.product.findUnique({
            where: { upc: req.params.id },
            include: {
                supplier: true
            }
        });
        if (!product)
            return res.status(404).json({ error: 'Product not found' });
        res.json(product);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch product' });
    }
}
async function createProduct(req, res) {
    try {
        const product = await prisma.product.create({
            data: req.body,
            include: {
                supplier: true
            }
        });
        res.status(201).json(product);
    }
    catch (error) {
        res.status(400).json({ error: 'Failed to create product', details: error.message });
    }
}
async function updateProduct(req, res) {
    try {
        const product = await prisma.product.update({
            where: { upc: req.params.id },
            data: req.body,
            include: {
                supplier: true
            }
        });
        res.json(product);
    }
    catch (error) {
        res.status(400).json({ error: 'Failed to update product', details: error.message });
    }
}
async function deleteProduct(req, res) {
    try {
        await prisma.product.delete({
            where: { upc: req.params.id },
        });
        res.status(204).send();
    }
    catch (error) {
        res.status(400).json({ error: 'Failed to delete product', details: error.message });
    }
}
export { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct, };
//# sourceMappingURL=productController.js.map