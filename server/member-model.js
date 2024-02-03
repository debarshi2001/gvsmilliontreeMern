const mongoose = require('mongoose')


const MemberSchema = mongoose.Schema({
    id: {
        type: Number,
        unique: true,
    },
    name: {
        type: String,
        max: 20,
        required: true,
        uppercase: true,
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
        min: 10,
        required: true,
        unique: true,
    },
    amount: {
        type: Number
    }

})

module.exports = MemberModel = mongoose.model('Member', MemberSchema)