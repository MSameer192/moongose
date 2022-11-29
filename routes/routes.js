const Model = require('../model/model');
const express = require('express');

const router = express.Router()

module.exports = router;


//Post Method


//01

router.post('/save_user', (req, res)=>{
    res.json(req.body)
})

router.post('/post_data', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})


//02
router.post('/save_user', (req, res) => {
    res.json({ msg: 'Hello', data: req.body })
})


//03
router.post('/post', (req, res) => {
    res.send('Post API')
})



//Get Method
router.get('/', (req, res) => {
    res.json({ msg: 'Hello' })
})


router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})



//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get('/getbyName/:name', async (req, res) => {
   try{
        const data = await Model.findOne({name:req.params.name});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})