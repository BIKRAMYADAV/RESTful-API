const express = require('express')
const router = express.Router()
const Blog = require('../models/model')


//learn about router in express theory

//creating the routes:

//get route
router.get('/getAll', async (req, res) => {
  try{
    const blog = await Blog.find();
  res.json(blog);
  }
  catch(error){
    res.status(400).json({message : error.message})
  }
})


//get by id
router.get('/get/:id', async (req, res) => {
    try{
        const blog = await Blog.findById(req.params.id);
        res.json(blog);
    }
    catch(error){
        res.status(400).json({message : error.message})
    }
  })

  //post route
router.post('/post', async (req, res) => {
    const blog = new Blog({
        name : req.body.name,
        age : req.body.age
    })
    try{
        const savedBlog = await blog.save();
        res.status(200).json(savedBlog);
    }
    catch(error){
        res.status(400).json({message : error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const blog = await Blog.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(blog)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const blog = await Blog.findByIdAndDelete(id)
        res.send(`Document with ${blog.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


module.exports = router