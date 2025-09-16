const express = require('express')
const app = express()
const port = 8070

app.get('/', (req, res) => {
    res.send('Hello World! BSITM it s')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
