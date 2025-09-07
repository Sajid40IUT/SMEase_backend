import { Request, Response } from 'express';
declare function getAllProducts(req: Request, res: Response): Promise<void>;
declare function getProductById(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
declare function createProduct(req: Request, res: Response): Promise<void>;
declare function updateProduct(req: Request, res: Response): Promise<void>;
declare function deleteProduct(req: Request, res: Response): Promise<void>;
export { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct, };
//# sourceMappingURL=productController.d.ts.map