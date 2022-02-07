const mongoose = require("mongoose")
const { Schema } = mongoose

const StageSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "each stage must have a name"],
    },
    project: {
      type: Schema.Types.ObjectId,
      ref: "Project",
      required: false,
    },
    tasks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Task",
      },
    ],
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Stage", StageSchema)
