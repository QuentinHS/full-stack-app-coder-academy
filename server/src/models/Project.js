const mongoose = require("mongoose")
const { Schema } = mongoose

// project schema
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: [true, "each project must have a name"],
  },
  stages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Stage"
    }
  ],
  address: {
      type: String,
      required: [true, "each project must have an address"],
  },
  completionDate: {
    type: Date,
    required: [true, "each project must have a completion date"],
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
  },
  comments: {
    type: String, 
    required: false
  }
},
  { timestamps: true }
)

// create model from schema
module.exports = mongoose.model("Project", ProjectSchema)



