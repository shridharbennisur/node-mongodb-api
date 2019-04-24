const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('connection refused', err);
	}
	db.collection('users').insertOne({
		name: 'shridhar',
		age: '24',
		_id: '13425'
	}, (err, res) => {
		if (err) {
			return console.log('unable insert users', err); 
		}
		console.log(JSON.stringify(res.ops, undefined, 2));
	});
	db.close();
});
