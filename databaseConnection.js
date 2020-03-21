const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(process.env.DB_URL ,{
        useNewUrlParser: true,
        useUnifiedTopology:true
    }, function (err, result) {
        if (err){
            console.log(err)
        }
        console.log('Database successfully connected')
    })}

module.exports =  connectDB