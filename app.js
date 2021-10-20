const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8888
const cors = require('cors')
const postRoute = require('./routes/postRoute')


app.use(bodyParser.json())
    .use(express.json())
    .use(cors())


postRoute(app)


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))