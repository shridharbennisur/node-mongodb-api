const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// eslint-disable-next-line no-undef
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/TodoApp');