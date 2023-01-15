const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');

const userSchema = new mongoose.Schema({
    login: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    }
})

const userModel = moongose.model('users', userSchema);
module.exports = userModel;