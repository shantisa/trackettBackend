let userSchema =  require('../schemas/userSchema');
const mongoose = require('mongoose');

/* Create User Model*/
const User = mongoose.model('User', userSchema);

module.exports = User;