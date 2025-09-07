import { Request, Response } from 'express';
declare function getAllPayrollPeriods(req: Request, res: Response): Promise<void>;
declare function getPayrollPeriodById(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
declare function createPayrollPeriod(req: Request, res: Response): Promise<void>;
declare function updatePayrollPeriod(req: Request, res: Response): Promise<void>;
declare function deletePayrollPeriod(req: Request, res: Response): Promise<void>;
export { getAllPayrollPeriods, getPayrollPeriodById, createPayrollPeriod, updatePayrollPeriod, deletePayrollPeriod, };
//# sourceMappingURL=payrollPeriodController.d.ts.map