const PostModel = require('../models/postModel')
const fs = require('fs');


function insertPost(req, res) {
    fs.readFile('config/data.json', 'utf8', function (err, data) {
        if (err) throw err;
        console.log(data);
        var json = JSON.parse(data);
        PostModel.insertMany(json, function (err, doc) {
            res.status(200).json({ statut: 'success', data: json })
            if (err) throw err;
        });
    });
}
function addPost(req, res) {
    var u = req.body

    console.log(req.body);

    const posts = new PostModel({
        height: u.height,
        race: u.race,
        gender: u.gender,
        birth: u.birth,
        spouse: u.spouse,
        death: u.death,
        realm: u.realm,
        hair: u.hair,
        name: u.name,
        wikiUrl: u.wikiUrl
    });

    posts.save(function (err, data) {
        if (err) throw err;
        res.status(200).json({ statut: 'success', data: data })
    });
}


function getPost(req, res) {
    PostModel.find((err, data) => {
        if (err) throw (err)

        res.json(data)
    })
}

function deletePost(req, res) {
    PostModel.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
        if (err) throw (err)

        res.json({
            msg: `Post id:${req.params.id} deleted!`,
            data: data,
            sucess: true
        })
    })
}

const postController = {
    addPost: addPost,
    getPost: getPost,
    deletePost: deletePost,
    insertPost: insertPost
}

module.exports = postController