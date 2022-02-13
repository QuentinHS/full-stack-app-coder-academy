const mongoose = require("mongoose")
const { Schema } = mongoose

// trade schema
const TradeSchema = new Schema({
  name: {
    type: String,
    required: [true, "each trade must have a name"],
  },
},
{ timestamps: true }
)

// create model from schema
module.exports = mongoose.model("Trade", TradeSchema)
