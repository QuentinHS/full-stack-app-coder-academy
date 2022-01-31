const mongoose = require("mongoose")
const { Schema } = mongoose

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: [true, "each project must have a name"],
  },
  address: {
      type: String, 
      required: [true, "each project must have an address"],
  },
  completionDate: {
    type: Date,
    required: [true, "each project must have a completion date"],
  },
  stages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Stage",
    },
  ],
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
})

module.exports = mongoose.model("Project", ProjectSchema)
