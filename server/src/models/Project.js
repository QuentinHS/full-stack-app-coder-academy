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
  projectManager: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false
  },
  tradeProviders: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: false
    },
  ],
  completed: {
    type: Boolean,
    default: false
  }
},
  { timestamps: true }
)


module.exports = mongoose.model("Project", ProjectSchema)



