const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect', err);
    }

    db.collection('users').find({
        _id: new ObjectID('5c9a0e089c20714715bc756b')
    }).toArray().then((users) => {
        console.log(JSON.stringify(users, undefined, 2));
    }).catch((err) => {
        console.log('unable to fetch users data', err);
    });
});