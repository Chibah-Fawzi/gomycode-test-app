const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myposts', function (err, database) {
    if (err)
        throw err
    else {
        db = database;
        console.log('Connected to MongoDB');
    }
}, { useUnifiedTopology: true, useNewUrlParser: true })
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);

module.exports = mongoose;
