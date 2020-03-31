const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises :[{
        type: {
            type: String,
        },
        name: {
            type: String,
            trim: true
        },
        weight: {
            type: Number,
            trim: true
        },
        reps: {
            type: Number,
            trim: true
        },
        sets: {
            type: Number,
            trim: true
        },
        distance: {
            type: Number,
            trim: true
        },
        duration: {
            type: Number,
            trim: true
        }
    }]
});

module.exports =  mongoose.model("Workout",WorkoutSchema);