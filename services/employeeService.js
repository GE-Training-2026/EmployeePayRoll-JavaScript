const employeeRepository = require('../repositories/employeeRepository');
const AppError = require('../utils/AppError');

class EmployeeService {
  async addEmployee(dto) {
    return await employeeRepository.save(dto);
  }

  async getAllEmployees() {
    return await employeeRepository.findAll();
  }

  async getEmployeeById(id) {
    try {
      return await employeeRepository.findById(id);
    } catch {
      throw new AppError(`Employee not found with id: ${id}`, 404);
    }
  }

  async updateEmployee(id, dto) {
    try {
      await employeeRepository.update(id, dto);
      return "Employee updated successfully";
    } catch {
      throw new AppError(`Employee not found with id: ${id}`, 404);
    }
  }

  async deleteEmployee(id) {
    try {
      await employeeRepository.delete(id);
    } catch {
      throw new AppError(`Employee not found with id: ${id}`, 404);
    }
  }
}

module.exports = new EmployeeService();
