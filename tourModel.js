const mongoose = require('mongoose');



const tourSchema = mongoose.Schema({
    name: { type: String, required: true },
    info: { type: String, required: true },
    image: { type: String, required: true },
    price:{ type: String, required: true },
})

const Tour = mongoose.model('tour',tourSchema)

module.exports = Tour