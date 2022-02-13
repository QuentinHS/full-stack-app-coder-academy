const mongoose = require("mongoose")
const { Schema } = mongoose

// task schema
const TaskSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "must provide name"],
      maxlength: [100, "name can not be more than 100 characters"],
    },
    stage: {
      type: Schema.Types.ObjectId,
      ref: "Stage",
    },
    tradeCategory: {
      type: Schema.Types.ObjectId,
      ref: "Trade",
      required: [false, "each task must have a category"],
    },
    pendingApproval: {
      type: Boolean,
      default: false,
    },
    declined: {
      type: Boolean,
      default: false,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    completionDate: {
      type: Date,
      required: [false, "each task must have a completion date"],
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
      required: [false, "each task must be assigned to a trade provider"],
    },
    image: {
      type: [String],
      required: false,
    },
  },
  { timestamps: true }
)

// create model from schema
module.exports = mongoose.model("Task", TaskSchema)
