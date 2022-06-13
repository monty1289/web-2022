const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('assets'))
app.set('view engine', 'ejs')
app.set('views', './views')


const index_router = require('./routes/index')
const api_router = require('./routes/api')
// Add all the routers you might have together here...

app.use("/", index_router)
app.use("/api", api_router)
app.use(expressLayouts)
// Add corresponding 'use' statements for each router

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})