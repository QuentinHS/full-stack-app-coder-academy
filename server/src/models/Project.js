const mongoose = require("mongoose")
const { Schema } = mongoose

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: [false, "each project must have a name"],
  },
  stages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Stage"
    }
  ],
  address: {
      type: String,
      required: [false, "each project must have an address"],
  },
  completionDate: {
    type: Date,
    required: [false, "each project must have a completion date"],
  },
  tradeProviders: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: false
    },
  ],
    createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [false, 'Please provide user'],
  },
},
  { timestamps: true }
)


module.exports = mongoose.model("Project", ProjectSchema)



