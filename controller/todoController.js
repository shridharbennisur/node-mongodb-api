module.exports = function () {
	var todoModel = require('../model/todo')();
	console.log(todoModel);
	/**
     * @desc creating the todo
     * @return response
     */
	function create(req, res) {
		todoModel.create(req.body).then((response) => {
			res.status(200).send(response.body);
		});
	}

	/**
     * @desc get the todo by id
     * @return response
     */
	function getTodoById(req, res) {
		let paramId = req.params.id || null;
		todoModel.getTodoById(paramId).then((response) => {	
			res.status(response.statusCode).send(response);
		});
	}

	/**
     * @desc get the all todos
     * @return response
     */
	function getTodos(req, res) {
		let data = {};
		todoModel.getTodos(data).then((response) => {
			res.status(response.statusCode).send(response);
		});
	}

	/**
     * @desc update the todo
     * @return response
     */
	function updateById(req, res) {
		let paramId = req.params.id || null;
		todoModel.updateById(paramId, req.body).then((response) => {	
			res.status(response.statusCode).send(response);
		});
	}

	/**
     * @desc delete the todo
     * @return response
     */
	function deleteById(req, res) {
		let paramId = req.params.id || null;
		todoModel.deleteById(paramId, req.data).then((response) => {	
			res.status(200).send(response.body);
		});
	}

	return {
		create,
		getTodos,
		getTodoById,
		updateById,
		deleteById  
	};
};