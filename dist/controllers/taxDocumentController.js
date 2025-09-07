import { PrismaClient } from '../../generated/prisma/index.js';
const prisma = new PrismaClient();
async function getAllTaxDocuments(req, res) {
    try {
        const documents = await prisma.taxDocument.findMany();
        res.json(documents);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch tax documents' });
    }
}
async function getTaxDocumentById(req, res) {
    try {
        const document = await prisma.taxDocument.findUnique({
            where: { tax_doc_id: Number(req.params.id) },
        });
        if (!document)
            return res.status(404).json({ error: 'Tax document not found' });
        res.json(document);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch tax document' });
    }
}
async function createTaxDocument(req, res) {
    try {
        const document = await prisma.taxDocument.create({
            data: req.body,
        });
        res.status(201).json(document);
    }
    catch (error) {
        res.status(400).json({ error: 'Failed to create tax document', details: error.message });
    }
}
async function updateTaxDocument(req, res) {
    try {
        const document = await prisma.taxDocument.update({
            where: { tax_doc_id: Number(req.params.id) },
            data: req.body,
        });
        res.json(document);
    }
    catch (error) {
        res.status(400).json({ error: 'Failed to update tax document', details: error.message });
    }
}
async function deleteTaxDocument(req, res) {
    try {
        await prisma.taxDocument.delete({
            where: { tax_doc_id: Number(req.params.id) },
        });
        res.status(204).send();
    }
    catch (error) {
        res.status(400).json({ error: 'Failed to delete tax document', details: error.message });
    }
}
export { getAllTaxDocuments, getTaxDocumentById, createTaxDocument, updateTaxDocument, deleteTaxDocument, };
//# sourceMappingURL=taxDocumentController.js.map