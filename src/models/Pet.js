const mongoose = require("mongoose");

const petSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        required: true,
        trim: true,
    },

    category: {
        type: String,
        required: true,
        enum: ["Dog", "Cat", "Rabbit", "Hamster"],
    },

    age: {
        type: Number,
        required: true,
    },

    ageUnit: {
        type: String,
        enum: ["months", "years"],
        default: "years",
    },

    description: {
        type: String,
        required: true,
    },

    location: {
        type: String,
        required: true,
    },

    latitude: {
        type: Number,
    },

    longitude: {
        type: Number,
    },

    image: {
        type: String,
        default: "",
    },

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    },
    {
    timestamps: true,
    }
);

module.exports = mongoose.model("Pet", petSchema);