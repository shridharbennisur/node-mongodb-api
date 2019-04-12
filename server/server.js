const _ = require('lodash');

// eslint-disable-next-line no-unused-vars
const { mongoose } = require('./db/mongoose.js');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { ObjectId } = require('mongodb');

const {Todo} = require('./models/todos');

app.use(bodyParser.json());

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;

//Wlcome page
app.get('/', (req, res) => {
	res.send({
		message: 'welcome!'
	});
});

//posting the todos
app.post('/todos', (req, res) => {
	const todo = new Todo(req.body);
	todo.save().then (todos => {
		res.send(todos);
	}).catch(err => {
		res.status(400).send(err);
	});
});

//geting the todos
app.get('/todos', (req, res) => {
	Todo.find().then (todos => {
		res.send({todos});
	}).catch(err => {
		res.status(400).send(err);
	});
});

//geting the todos by id
app.get('/todos/:id', (req, res) => {
	const id = req.params.id;
	if (!ObjectId.isValid(id)) {
		return res.status(404).send({
			message: 'todo id is not found'
		});
	} 
	Todo.findById(id).then(todo => {
		if (!todo) {
			return res.status(404).send({
				message: 'todo id is not found'
			});
		}
		return res.send({todo});
	}).catch(err => {
		return res.status(404).send({
			message: 'todo id is not found',
			err
		});
	});
});

//deleting the 
app.delete('/todos/:id', (req, res) => {
	const id = req.params.id;
	if (!ObjectId.isValid(id)) {
		return res.status(404).send({
			message: 'todo id is not found'
		});
	} 
	Todo.findByIdAndRemove(id).then(todo => {
		if (!todo) {
			return res.status(404).send({
				message: 'todo id is not found'
			});
		}
		return res.send({todo});
	}).catch(err => {
		return res.status(404).send({
			message: 'todo id is not found',
			err
		});
	});
});

//updating the todos
app.patch('/todos/:id', (req, res) => {
	const id = req.params.id;
	if (!ObjectId.isValid(id)) {
		return res.status(404).send({
			message: 'todo id is not found'
		});
	}
	let body = _.pick(req.body, ['text', 'completed']);
	if (_.isBoolean(body.completed) && body.completed) {
		body.completedAt = new Date().getTime();
	} else {
		body.completed = false;
		body.completedAt = null;
	}
	Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then(todo => {
		if (!todo) {
			return res.status(404).send({
				message: 'todo id is not updated',
			});
		}
		return res.send({todo});

	}).catch(err => {
		return res.status(404).send({
			message: 'todo id is not updated',
			err
		});
	});
});

app.listen(port, () => {
	console.log(`started on port ${port}`);
});