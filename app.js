const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
app.get('/', (req, res) => {
    fs.readFile('WorldPopulation.json', ((err, data) => {
        if (err) {
            console.error(err)
            return
        }
        res.json(data)
    }))
})
app.get('/worldPopulation', (req, res) => {
    fs.readFile('WorldPopulation.csv', ((err, data) => {
        if (err) {
            console.error(err)
            return
        }
        res.end(data)
    }))
})
app.listen(8000, () => {
    console.log('server has started ')
})