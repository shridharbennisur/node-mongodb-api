
const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://shri:<shridharm773>@cluster0-azcdv.mongodb.net/admin?retryWrites=true';
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
	console.log(err);
	// eslint-disable-next-line no-unused-vars
	const collection = client.db('test').collection('devices');
	console.log(collection);
	// perform actions on the collection object
	client.close();
});