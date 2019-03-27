const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect', err);
    }

   //update
   db.collection('users').findOneAndUpdate({
       _id: new ObjectID('5c9b73d0412a583481bcf851')
   }, {
       $set: {
           name: 'sai mb'
       },
       $inc: {
           age: 7
       }
   }, {
       returnOriginal: false
   }).then(res => {
        console.log(res);
   }).catch(err => {
       console.log(err);
   });

});