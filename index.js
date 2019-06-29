const express = require('express')
var compression = require('compression');
const app = express()

app.use(compression());
app.use(express.json())

const repository = []

app.post('/', (req, res) => {
    repository.push(req.body)
    res.json(repository)
})

app.listen(9000)