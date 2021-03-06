const mongoose = require('mongoose');

// eslint-disable-next-line no-undef
if (!process.env.MONGO_URL) {
	var { mongodbConfig } = require('../../config/db');
}


mongoose.Promise = global.Promise;
// eslint-disable-next-line no-undef
const url = mongodbConfig && mongodbConfig.url ? mongodbConfig.url : process.env.MONGO_URL;

mongoose.connect(url, { useNewUrlParser: true });