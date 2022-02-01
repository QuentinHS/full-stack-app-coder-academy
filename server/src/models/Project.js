const mongoose = require("mongoose")
const { Schema } = mongoose

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: [true, "each project must have a name"],
  },
  address: {
      type: String, 
      required: [false, "each project must have an address"],
  },
  completionDate: {
    type: Date,
    required: [false, "each project must have a completion date"],
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: false
    },
  ],
},
{ timestamps: false }
)

module.exports = mongoose.model("Project", ProjectSchema)
