## Employee Payroll Using JavaScript

### This project provides a RESTful Employee Payroll API built with JSON Server and Express, while maintaining a layered architecture (Controller → Service → Repository → Model). It simulates a backend similar to Java/Spring Boot but uses a lightweight JSON file for persistence.


## 📂 Project Structure
```
employee-json-server/
│── db.json                  # JSON database
│── server.js                # Express + JSON Server setup
│── package.json             # Dependencies & scripts
│── config/
│    └── database.js         # Placeholder config
│── models/
│    └── Employee.js         # Employee DTO class
│── repositories/
│    └── employeeRepository.js
│── services/
│    └── employeeService.js
│── controllers/
│    └── employeeController.js
│── routes/
│    └── employeeRoutes.js
│── middleware/
│    └── errorHandler.js
│── utils/
│    └── AppError.js

```

## 🚀 Getting Started
### 1. Install dependencies

```
npm install

```

### 2. Start the server

```
npm start

```

### Server runs at:

```
http://localhost:3000
```

## 📖 API Endpoints
### Employee Routes (/employees)
```
| Method | Endpoint         | Description           |
| ------ | ---------------- | --------------------- |
| POST   | `/employees`     | Create a new employee |
| GET    | `/employees`     | Get all employees     |
| GET    | `/employees/:id` | Get employee by ID    |
| PUT    | `/employees/:id` | Update employee by ID |
| DELETE | `/employees/:id` | Delete employee by ID |
```

## JSON Server Routes (/api/employee_payroll)

### JSON Server also exposes direct CRUD endpoints:

```
GET    /api/employee_payroll
GET    /api/employee_payroll/:id
POST   /api/employee_payroll
PUT    /api/employee_payroll/:id
DELETE /api/employee_payroll/:id

```