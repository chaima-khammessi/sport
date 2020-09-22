const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    name: String,
    post: String,
    age: Number,
    img: String


});
const player = mongoose.model('Player', playerSchema)
module.exports = player;