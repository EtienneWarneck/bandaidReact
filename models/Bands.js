const mongoose = require('mongoose');

const BandSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' //referes to collection users
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    type: {
        type: String,
        default: "personal"
    },
    setup: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    youtubeVideoId: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: Date.now
    },
})

module.exports = mongoose.model('band', BandSchema);