const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // points to db.json
const middlewares = jsonServer.defaults();

// Global error handler (similar to your AppError)
server.use((req, res, next) => {
  try {
    next();
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

server.use(middlewares);

// Custom routes (optional, JSON Server already gives CRUD by default)
server.use('/api', router);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON Server running at http://localhost:${PORT}`);
});
