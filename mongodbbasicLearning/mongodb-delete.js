const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('unable to connect', err);
	}

	//delete many
	// db.collection('users').deleteMany({age: 25}).then((res) => {
	//     console.log(res);
	// }).catch((err) => {
	//     console.log('unable to fetch users data', err);
	// });

	//delete one
	db.collection('users').deleteOne({name: 'shridhar'}).then((res) => {
		console.log(res);
	}).catch((err) => {
		console.log('unable to fetch users data', err);
	});

	//find and delete 
	// db.collection('users').findOneAndDelete({name: 'shridhar'}).then((res) => {
	//     console.log(res);
	// }).catch((err) => {
	//     console.log('unable to fetch users data', err);
	// });


});