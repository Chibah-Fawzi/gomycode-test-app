var db = require('../../config/db');

const Schema = db.Schema;

var postSchema = Schema({
    height: String,
    race: String,
    gender: String,
    birth: String,
    spouse: String,
    death: String,
    realm: String,
    hair: String,
    name: String,
    wikiUrl: String
});


module.exports = postSchema;