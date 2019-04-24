module.exports = function (app) {
	let express = require('express'),
		router = express.Router(),
		controller = require('../controller/todoController')();
	router.route('/').post(controller.create);
	router.route('/').get(controller.getTodos);
	router.route('/:id').get(controller.getTodoById);
	router.route('/:id').patch(controller.updateById);
	router.route('/:id').delete(controller.deleteById);

	app.use('/api/v1/todos', router);
};