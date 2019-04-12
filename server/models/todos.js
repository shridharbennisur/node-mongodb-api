const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const TodoSchema = new Schema({
	text: {
		type: String,
		trim: true,
		required: true
	},
	completed: {
		type: Boolean,
		required: true,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	},
	startedAt: {
		type: Number,
		default: new Date().getTime()
	}
});
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {Todo};