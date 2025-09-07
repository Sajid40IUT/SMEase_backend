import { Request, Response } from 'express';
declare function getAllPayslips(req: Request, res: Response): Promise<void>;
declare function getPayslipById(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
declare function createPayslip(req: Request, res: Response): Promise<void>;
declare function updatePayslip(req: Request, res: Response): Promise<void>;
declare function deletePayslip(req: Request, res: Response): Promise<void>;
export { getAllPayslips, getPayslipById, createPayslip, updatePayslip, deletePayslip, };
//# sourceMappingURL=payslipController.d.ts.map