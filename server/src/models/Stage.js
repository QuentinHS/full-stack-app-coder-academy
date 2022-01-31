const mongoose = require("mongoose")
const { Schema } = mongoose

const StageSchema = new Schema({
  name: {
    type: String,
    required: [true, "each stage must have a name"],
  },
  stageNumber: {
    type: Number,
    required: [true, "each stage must be numbered"],
  },
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Task'
    },
  ],
})

module.exports = mongoose.model("Stage", StageSchema)
