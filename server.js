const express = require('express')
const config = require('./config')
const app = express()


app.use(express.static('public'))


app.get('/', (req, res)=> {
 res.send('index.html')
})


app.listen(config.port, _ => {
 console.log('Currently listening on port %d', config.port)
})