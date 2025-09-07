import { Request, Response } from 'express';
declare function getAllSuppliers(req: Request, res: Response): Promise<void>;
declare function getSupplierById(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
declare function createSupplier(req: Request, res: Response): Promise<void>;
declare function updateSupplier(req: Request, res: Response): Promise<void>;
declare function deleteSupplier(req: Request, res: Response): Promise<void>;
export { getAllSuppliers, getSupplierById, createSupplier, updateSupplier, deleteSupplier, };
//# sourceMappingURL=supplierController.d.ts.map