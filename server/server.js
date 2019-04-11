// eslint-disable-next-line no-unused-vars
const { mongoose } = require('./db/mongoose.js');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const {Todo} = require('./models/todos');

app.use(bodyParser.json());

//posting the todos
app.post('/todos', (req, res) => {
	console.log(req.body);
	const todo = new Todo({
		text: req.body.text
	});
	todo.save().then (doc => {
		res.send(doc);
	}).catch(err => {
		res.status(400).send(err);
	});
});

app.listen(3000, () => {
	console.log('on 3000 port started');
});