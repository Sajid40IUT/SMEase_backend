import { Request, Response } from 'express';
declare function getAllSales(req: Request, res: Response): Promise<void>;
declare function getSaleById(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
declare function createSale(req: Request, res: Response): Promise<void>;
declare function updateSale(req: Request, res: Response): Promise<void>;
declare function deleteSale(req: Request, res: Response): Promise<void>;
export { getAllSales, getSaleById, createSale, updateSale, deleteSale, };
//# sourceMappingURL=saleController.d.ts.map