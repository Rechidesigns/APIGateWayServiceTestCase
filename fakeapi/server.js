const express = require('express')
const app = express()
const PORT = 3001

app.use(express.json())
app.get('/fakeapi', (req, resn) => {
    resn.send('Hello from fake api')
})
app.post('/bogusapi', (req, res, next) => {
    res.send('Bogus api says hello!')
})

app.listen(PORT, () => {
    console.log('Fake server started on port ' + PORT)
})