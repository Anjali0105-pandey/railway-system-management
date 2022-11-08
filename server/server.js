const express = require('express')

const app = express()

app.use('/post', (req, res) => {
  res.send('Welcome to the server')
})
app.use('/user', (req, res) => {
  res.send('This is user page')
})

app.use('/', () => {
    res.send('index page')
})
app.listen(3000, console.log('server started'))

// node
// git
