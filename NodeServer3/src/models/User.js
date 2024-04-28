const mongoose = require('mongoose');

const User = mongoose.model('User', {
    firstName: String,
    lastName: String,
    email: String,
    avatar: String
})

module.exports = User;