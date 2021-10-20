const postsController = require('../controllers/postsController')



module.exports = (app) => {
    app.post('/post', postsController.addPost)
    app.get('/post', postsController.getPost)
    app.delete('/deletePost/:id', postsController.deletePost)
    app.post('/insertPost', postsController.insertPost)

}

