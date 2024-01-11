const express = require('express')
const router = express.Router()

//learn about router in express theory

//creating the routes:

//get route
router.get('/get', (req, res) => {
  res.send('get api')
})


//get by id
router.get('/get/:id', (req, res) => {
    res.send('get by id api')
  })

  //post route
router.post('/post', (req, res) => {
    res.send('post api')

})

//update by id
router.patch('/update/:id', (req, res) => {
    res.send('update by id api')

})

//delete by id
router.delete('/delete/:id', (req, res) => {
    res.send('delete by id api')

})


module.exports = router