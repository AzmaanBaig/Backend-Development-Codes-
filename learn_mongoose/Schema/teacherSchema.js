const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phone: {
        const mongoose = require('mongoose')

        const userSchema = new mongoose.Schema({
            name: {
                type: String,
                required: true
            },

            age: {
                type: Number,
                required: true
            },

            email: {
                type: String,
                required: true,
                unique: true
            },

            phone: {
                type: Number,
                required: true,
                unique: true
            },

            InChargeofClass: {
                type: String,
                required: true
            }

        })

        const userModel = mongoose.model('Teacher', userSchema)

        module.exports = userModel
        type: Number,
        required: true,
        unique: true
    },

    InChargeofClass: {
        type: String,
        required: true
    }

})

const userModel = mongoose.model('Teacher', userSchema)

module.exports = userModel