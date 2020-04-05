const mongoose = require('mongoose');

const Schema = new mongoose.Schema({ // prototype
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String },
});


module.exports = mongoose.model('Company', Schema);