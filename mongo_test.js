const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, {useUnifiedTopology: true}, function (err, client) {
    console.log('Connected! ')

    //Database name 

    const dbName = 'myproject';
    const db = client.db(dbName);

    // New user 

    var name = 'user' + Math.floor(Math.random()*1000);
    var email = name + '@mit.edu'

    //Insert into customer table 
    var collection = db.collection('customers');
    var doc = {name, email};
    collection.insertOne(doc, {w:1}, function(err, result) {
        console.log('Document inserted');
    });

});