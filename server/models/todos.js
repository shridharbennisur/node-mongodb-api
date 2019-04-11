const mongoose = require('mongoose');
const Todo = mongoose.model('Todo', {
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
		default: new Date()
	}
});

module.exports = {Todo};