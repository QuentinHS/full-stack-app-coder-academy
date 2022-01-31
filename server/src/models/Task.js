const mongoose = require("mongoose")
const { Schema } = mongoose

const TaskSchema = new Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
  },
  tradeCategory: {
    type: Schema.Types.ObjectId,
    ref: "Trade",
    required: [true, "each task must have a category"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
  completionDate: {
    type: Date,
    required: [true, "each task must have a completion date"],
  },
  materialsAreOnSite: {
    type: Boolean,
    default: false,
  },
  taskDescription: {
    type: String,
    required: false,
    minlength: [10, "task description must be at least 10 characters"],
    maxlength: [250, "task description cannot be more than 250 characters"],
  },
  approvedByProjectManager: {
    type: Boolean,
    default: false,
  },
  declinedComments: {
    type: [String],
    default: [],
    required: false,
    minlength: [10, "comments must be at least 10 characters"],
    maxlength: [250, "comments cannot be more than 250 characters"],
  },
  assignedTradeProvider: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "each task must be assigned to a trade provider"],
  },
  image: {
    type: [String],
    required: false,
  },
},
{ timestamps: true }
)

module.exports = mongoose.model("Task", TaskSchema)
