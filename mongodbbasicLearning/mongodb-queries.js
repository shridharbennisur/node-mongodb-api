const { ObjectId } = require('mongodb');

// eslint-disable-next-line no-unused-vars
const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todos');

const id = '5caee463711d1445262adef1';


// this is finding query
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


// this is deleting query
// eslint-disable-next-line no-constant-condition
if (ObjectId.isValid(id) || true) {
	Todo.remove({}).then(todos => {
		console.log('remove =>', todos);
	}).catch(err => {
		console.log(err, 'err in find');
	});
	Todo.findOneAndRemove({
		text: 'this is from postman'
	}).then(todos => {
		console.log('findoneremove =>', todos);
	}).catch(err => {
		console.log(err, 'err in find');
	});
	Todo.findByIdAndRemove(id).then(todos => {
		console.log('findbyid =>', todos);
	}).catch(err => {
		console.log(err, 'err in find');
	});
} else {
	console.log('id is invalid');
}