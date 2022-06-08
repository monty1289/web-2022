const express = require('express')
const app = express()


app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('assets'))



app.get('/api', (req, res) => {
  let data = {
    "name" : "monty"
  } 
})



  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })