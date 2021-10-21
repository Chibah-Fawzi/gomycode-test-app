const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:B8Q7BoO0B5hIxkoK@cluster0.xesev.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', function (err, database) {
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
