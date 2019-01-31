
// Movie Structure

// -- id
// -- title
// -- summary
// -- image
// -- cast
// ---- name
// ---- role
// -- created_at
// -- updated_at
// ---------------
// -- ratings
// -- is_featured
// -- year


const mongoose = require('mongoose')
const Schema = mongoose.Schema

// movie properties and validators
var movieSchema = new Schema({
    title: { type: String, required: true, trim: true},
    summary: { type: String, required: true, },
    image: { type: String, required: true },
    cast: { type: Array },
    ratings: { type: Number, max: 5, min: 0 },
    is_featured: { type: Boolean },
    year: { type: Number, minlength: 4, maxlength: 4 },
    created_at: { type: Date, default: new Date()},
    updated_at: { type: Date, default: new Date()},
});

module.exports = mongoose.model('Movie', movieSchema);