const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('unable to connect', err);
	}

	db.collection('users').find().toArray().then((users) => {
		console.log(JSON.stringify(users, undefined, 2));
	}).catch((err) => {
		console.log('unable to fetch users data', err);
	});
});