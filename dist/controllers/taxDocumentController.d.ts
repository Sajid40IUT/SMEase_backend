import { Request, Response } from 'express';
declare function getAllTaxDocuments(req: Request, res: Response): Promise<void>;
declare function getTaxDocumentById(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
declare function createTaxDocument(req: Request, res: Response): Promise<void>;
declare function updateTaxDocument(req: Request, res: Response): Promise<void>;
declare function deleteTaxDocument(req: Request, res: Response): Promise<void>;
export { getAllTaxDocuments, getTaxDocumentById, createTaxDocument, updateTaxDocument, deleteTaxDocument, };
//# sourceMappingURL=taxDocumentController.d.ts.map