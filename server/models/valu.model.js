const { Decimal128 } = require("bson")
const mongoose = require("mongoose")

const ValuSchema = new mongoose.Schema({
    nickName: {
        type: String,
        required: [true, "nick name required (Example: Danny's Galaxy S20, Lisa's Iphone)"],
        minlength: [2, "nick name must be longer than 2 characters"]


    },
    type: {
        type: String,
        required: [true, "type of item required (Example: Samsung, LG, Asus)"]

    },
    model: {
        type: String,
        required: [true, "model required for proper identifiacation (Example: S20, Note20 Xl, ROG M17)"],
        min: [4, "number must be longer than 4 characters"],
        max: [50, "number must not exceed 50 characters"]

    },
    serialNumber: {
        type: Number

    },
    description: {
        type: String,
        required: [true, "description required, please describe item in specific details and list discrepencies if any"]

    },
    picture: {
        type: String,
        required: [true, "please enter at least one picture of item"]
    }

})

const Valu = mongoose.model("Valu", ValuSchema)

module.exports = Valu;




