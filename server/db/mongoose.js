const mongoose = require('mongoose');
const { mongodbConfig } = require('../../config/db');

mongoose.Promise = global.Promise;
// eslint-disable-next-line no-undef
const url = mongodbConfig && mongodbConfig.url ? mongodbConfig.url : 'mongodb://localhost:27017/TodoApp';

mongoose.connect(url, { useNewUrlParser: true });