const mongoose = require('mongoose');

const healthcareSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})