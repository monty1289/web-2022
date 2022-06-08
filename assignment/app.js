const express = require('express')
const app = express()
const PORT = 3000

app.use(express.static('assets'))
app.set('view engine', 'ejs')
app.set('views', './views')


const index_router = require('./routes/index')
const products_router = require('./routes/products')
// Add all the routers you might have together here...

app.use("/", index_router)
app.use("/products", products_router)
// Add corresponding 'use' statements for each router

app.get('/mens', (req, res) => {
    res.send("mens")
  })

  app.get('/womens', (req, res) => {
    res.send("womens")
  })

  app.get('/boys', (req, res) => {
    res.send("boys")
  })

  app.get('/girls', (req, res) => {
    res.send("girls")
  })

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
    })