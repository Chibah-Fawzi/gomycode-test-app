var db = require('../config/db');

const schema = require('./schemas/postSchema')

const Post = db.model('Post', schema);


module.exports = Post