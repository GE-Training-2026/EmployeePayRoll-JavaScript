const employeeService = require('../services/employeeService');

class EmployeeController {
  async createEmployee(req, res, next) {
    try {
      const savedEmployee = await employeeService.addEmployee(req.body);
      res.status(201).json(savedEmployee);
    } catch (error) {
      next(error);
    }
  }

  async getAllEmployees(req, res, next) {
    try {
      const employees = await employeeService.getAllEmployees();
      res.status(200).json(employees);
    } catch (error) {
      next(error);
    }
  }

  async getEmployeeById(req, res, next) {
    try {
      const employee = await employeeService.getEmployeeById(req.params.id);
      res.status(200).json(employee);
    } catch (error) {
      next(error);
    }
  }

  async updateEmployee(req, res, next) {
    try {
      const response = await employeeService.updateEmployee(req.params.id, req.body);
      res.status(200).json({ message: response });
    } catch (error) {
      next(error);
    }
  }

  async deleteEmployee(req, res, next) {
    try {
      await employeeService.deleteEmployee(req.params.id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new EmployeeController();
