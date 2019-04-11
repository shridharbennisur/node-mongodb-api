// eslint-disable-next-line no-unused-vars
const { mongoose } = require('./db/mongoose.js');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { ObjectId } = require('mongodb');

const {Todo} = require('./models/todos');

app.use(bodyParser.json());

//posting the todos
app.post('/todos', (req, res) => {
	console.log(req.body);
	const todo = new Todo(req.body);
	todo.save().then (todos => {
		res.send(todos);
	}).catch(err => {
		res.status(400).send(err);
	});
});

//geting the todos
app.get('/todos', (req, res) => {
	console.log(req);
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
		return res.send(404).send({
			data: {message: 'todo is not found'}
		});
	} 
	Todo.findById(id).then(todo => {
		if (!todo) {
			return res.send(404).send({
				data: {message: 'todo is not found'}
			});
		}
		return res.send({todo});
	}).catch(err => {
		return res.send(404).send({
			data: {message: 'todo is not found', err}
		});
	});
});

app.listen(3000, () => {
	console.log('on 3000 port started');
});