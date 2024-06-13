const express = require('express')
const router = express.Router()
const axios = require('axios')
const registry = require('./registry.json')
const fs = require('fs')
const { error } = require('console')


router.all('/:apiName/:path', (req, res) => {
    console.log(req.params.apiName)
    if (registry.services[req.params.apiName]) {
        axios({
            method: req.method,
            url: registry.services[req.params.apiName].url + req.params.path,
            headers: req.headers,
            data: req.body
        }).then((response) => {
            res.send(response.data)
        })
    }else {
        
    res.send('API name doesnt exist')
    }
})

router.post('/register', (req, res) => {
    const registerationInfo = req.body
    registry.services[registerationInfo.apiName] = {...registerationInfo}

    fs.writeFile("./routes/registry.json'", JSON.stringify(registry), (error) => {
        if(error) {
            res.send('could not register ' + registerationInfo.apiName + "'\n" + error)
        }else {
            res.send("successfully registered '" + registerationInfo.apiName + "'")
        }
    })
})

module.exports = router