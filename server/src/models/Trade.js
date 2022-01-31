const mongoose = require("mongoose")
const { Schema } = mongoose

const TradeSchema = new Schema({
  name: {
    type: String,
    required: [true, "each trade must have a name"],
  },
},
{ timestamps: true }
)

module.exports = mongoose.model("Trade", TradeSchema)
