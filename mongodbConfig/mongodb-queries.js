const { ObjectId } = require('mongodb');

// eslint-disable-next-line no-unused-vars
const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todos');

const id = '5caee463711d1445262adef1';



// eslint-disable-next-line no-constant-condition
if (ObjectId.isValid(id) || true) {
	Todo.find({
		text: 'this is from postman'
	}).then(todos => {
		console.log('find =>', todos);
	}).catch(err => {
		console.log(err, 'err in find');
	});
	Todo.findOne({
		text: 'this is from postman'
	}).then(todos => {
		console.log('findone =>', todos);
	}).catch(err => {
		console.log(err, 'err in find');
	});
	Todo.findById(id).then(todos => {
		console.log('findbyid =>', todos);
	}).catch(err => {
		console.log(err, 'err in find');
	});
} else {
	console.log('id is invalid');
}