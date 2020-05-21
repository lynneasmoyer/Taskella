const TaskController = require('../controllers/task.controller');


module.exports = (app) => {
    app.get('/api/tasks', TaskController.index);
    app.get('/api/task/:id', TaskController.show);
    app.post('/api/task', TaskController.create);
    app.put('/api/task/:id', TaskController.update);
    app.delete('/api/task/:id', TaskController.destroy);
}