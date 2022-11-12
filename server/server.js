const express = require('express') // extenally download (npm i express)
const path = require('path') // native module

const app = express()

app.set('view engine', 'ejs') // What are going to render?
app.set('views', 'views') // Where are gonna render from ?



// static
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// http://localhost:5000/test -> test.ejs
app.get('/test', (req, res) => {
  res.render('test', {
    name: 'anjali'
  })
})

app.listen(5000, console.log('server started'))

// node
// git
