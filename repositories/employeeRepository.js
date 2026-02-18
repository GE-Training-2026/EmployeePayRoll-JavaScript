const axios = require('axios');
const API_URL = 'http://localhost:3000/api/employee_payroll';

class EmployeeRepository {
  async save(data) {
    const { data: employee } = await axios.post(API_URL, data);
    return employee;
  }

  async findAll() {
    const { data } = await axios.get(API_URL);
    return data;
  }

  async findById(id) {
    const { data } = await axios.get(`${API_URL}/${id}`);
    return data;
  }

  async update(id, data) {
    const { data: updated } = await axios.put(`${API_URL}/${id}`, data);
    return updated;
  }

  async delete(id) {
    await axios.delete(`${API_URL}/${id}`);
    return true;
  }
}

module.exports = new EmployeeRepository();
