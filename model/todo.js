// const {Todo} = require('../server/models/todos');
// const { ObjectId } = require('mongodb');
module.exports = function () {
	const {Todo} = require('../mongodb/models/todos');
	const _ = require('lodash');

	function create(data) {
		console.log(data);
		return {data:'success'};
	}
    
	function getTodos(data) {
		return Todo.find(data).then(response => {
			return {
				body: response,
				message: 'success',
				statusCode: 200
			};
		}).catch(error => {
			return {
				body: error,
				message: 'some thing went wrong',
				statusCode: 404
			};
		});
	}

	function getTodoById(id) {
		return Todo.findById(id).then(response => {
			if (!response) {
				return {
					message: 'Todo is not found',
					body: null,
					statusCode: 404
				};
			}
			return {
				body: response,
				message: 'success',
				statusCode: 200
			};
		}).catch(error => {
			return {
				body: null,
				message: 'Todo is not found',
				statusCode: 404,
				error
			};
		});	
	}

	function updateById(id, data) {
		let body = _.pick(data, ['text', 'completed']);
		if (_.isBoolean(body.completed) && body.completed) {
			body.completedAt = new Date().getTime();
		} else {
			body.completed = false;
			body.completedAt = null;
		}
		return Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then(todo => {
			if (!todo) {
				return {
					body: {},
					message: 'Todo is not found',
					statusCode: 404
				};
			}
			return {
				body: todo,
				message: 'success',
				statusCode: 200
			};

		}).catch(err => {
			return {
				body: null,
				message: 'something went wrong',
				statusCode: 200,
				err
			};
		});
	}

	function deleteById(id) {
		return Todo.findByIdAndRemove(id).then(todo => {
			if (!todo) {
				return {
					statusCode: 404,
					body: {},
					message: 'Todo Not found'
				};
			}
			return {
				statusCode: 200,
				body: todo,
				message: 'success'
			};
		}).catch(err => {
			return {
				statusCode: 404,
				err,
				body: null,
				message: 'something went wrong'
			};
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