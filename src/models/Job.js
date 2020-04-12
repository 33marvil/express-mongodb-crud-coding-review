const mongoose = require('mongoose');
require('mongoose-double')(mongoose);

const Schema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    description: { type: String },
    hiringDate: { type: Date },
    salary: {
        type: mongoose.Schema.Types.Double
    },
    location: { type: String },
    contactEmail: { type: String },
    isStillAvailable: { type: Boolean, default: true }
});




module.exports = mongoose.model('Job', Schema);