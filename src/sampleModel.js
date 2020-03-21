
// const database = require('./databaseConnection')
const mongoose = require('mongoose');
const Schema = mongoose.Schema

// Database schema
const TestDbSchema = Schema({
    title: String
})

// compile schema to model
const TestDb = mongoose.model('TestDb', TestDbSchema)

// a document instance
const testData = new TestDb({title: 'Database setup working'})

//save
testData.save(function (err, result) {
    if (err){
        console.log('Something happened' + err)
    }
    console.log('Title is: ' + result.title)
})

module.exports = testData