const express = require('express')

const app = express()

app.use('/post', (req, res) => {
  res.send('Welcome to the server')
})

app.listen(3000, console.log('server started'))

// node
// git