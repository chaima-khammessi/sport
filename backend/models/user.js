const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
   firstName: String,
   lastName: String,
   email: String,
   pwd: String,
   confirmPwd: String,
   phone: Number

});
const user = mongoose.model('users', userSchema)
module.exports = user;