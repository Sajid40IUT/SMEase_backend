import { PrismaClient } from '../../generated/prisma/index.js';
const prisma = new PrismaClient();
async function getAllEmployees(req, res) {
    try {
        const employees = await prisma.employee.findMany();
        res.json(employees);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch employees' });
    }
}
async function getEmployeeById(req, res) {
    try {
        const employee = await prisma.employee.findUnique({
            where: { employee_id: req.params.id },
        });
        if (!employee)
            return res.status(404).json({ error: 'Employee not found' });
        res.json(employee);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch employee' });
    }
}
async function createEmployee(req, res) {
    try {
        const employee = await prisma.employee.create({
            data: req.body,
        });
        res.status(201).json(employee);
    }
    catch (error) {
        res.status(400).json({ error: 'Failed to create employee', details: error.message });
    }
}
async function updateEmployee(req, res) {
    try {
        const employee = await prisma.employee.update({
            where: { employee_id: req.params.id },
            data: req.body,
        });
        res.json(employee);
    }
    catch (error) {
        res.status(400).json({ error: 'Failed to update employee', details: error.message });
    }
}
async function deleteEmployee(req, res) {
    try {
        await prisma.employee.delete({
            where: { employee_id: req.params.id },
        });
        res.status(204).send();
    }
    catch (error) {
        res.status(400).json({ error: 'Failed to delete employee', details: error.message });
    }
}
export { getAllEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee, };
//# sourceMappingURL=employeeController.js.map