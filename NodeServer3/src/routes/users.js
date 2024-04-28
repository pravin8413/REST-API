const express = require('express');
const {
    getUsers,
    createUsers,
    updateUsers,
    deleteUsers 
} = require("../controllers/Users.js")

const router = express.Router()

//Read OPeration
router.get('/user', getUsers)

// Create operation

router.post('/user', createUsers)

// Update operation

router.patch('/user/:id', updateUsers)

// Delete operation

router.delete('/user/:id', deleteUsers)

//SEARCH /users (READ - with query parameter)

module.exports = router;