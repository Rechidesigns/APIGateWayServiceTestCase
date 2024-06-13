const express = require('express')
const app = express()
const PORT = 3001

app.use(express.json())
app.get('/fakeapin', (req, resn) => {
    resn.send('Hello from fake api')
})

app.listen(PORT, () => {
    console.log('Fake server started on port ' + PORT)
})