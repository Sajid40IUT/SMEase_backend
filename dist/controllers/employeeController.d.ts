import { Request, Response } from 'express';
declare function getAllEmployees(req: Request, res: Response): Promise<void>;
declare function getEmployeeById(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
declare function createEmployee(req: Request, res: Response): Promise<void>;
declare function updateEmployee(req: Request, res: Response): Promise<void>;
declare function deleteEmployee(req: Request, res: Response): Promise<void>;
export { getAllEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee, };
//# sourceMappingURL=employeeController.d.ts.map