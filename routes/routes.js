// const Model = require('../models/model');
const express = require('express');

const router = express.Router()

module.exports = router;


//Post Method
router.post('/', (req, res) => {
    res.json({msg: 'Hello', data: req.body})
})


router.post('/post', (req, res) => {
    res.send('Post API')
})

//Get Method
router.get('/', (req, res) => {
    res.json({msg: 'Hello'})
})


//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})