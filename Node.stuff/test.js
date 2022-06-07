const express = require('express')
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {
  res.send("index")
})

app.get('/users', (req, res) => {
  res.send('user page')
})

app.get('/api', (req, res) => {
  let data = {
    "name" : "monty"
  } 
})



  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })