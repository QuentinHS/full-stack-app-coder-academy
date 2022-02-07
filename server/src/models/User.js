const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const validator = require("validator")
const { Schema } = mongoose

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please provide  first name"],
      maxlength: 50,
      minlength: 3,
    },
    lastName: {
      type: String,
      required: [false, "Please provide name"],
      maxlength: 50,
      minlength: 3,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please provide email"],
      validate: {
        validator: validator.isEmail,
        message: "Please provide valid email",
      },
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
      minlength: 6,
    },
    businessName: {
      type: String,
      required: [false, "Please provide a company name"],
      maxlength: [50, "company must have a max length of 50 characters"],
      minlength: [3, "company must have at least 3 characters"],
      unique: true,
    },
    abn: {
      type: Number,
      maxlength: 50,
      minlength: 3,
      unique: true,
    },
    role: {
      type: String,
      enum: ["admin", "project manager", "trade provider"],
      default: "trade provider"
    },
    trades: [
      {
        type: [Schema.Types.ObjectId],
        required: false,
        ref: "Trade",
      },
    ],
    projects: [
      {
        type: [Schema.Types.ObjectId],
        ref: "Project",
        required: false,
      },
    ],
  },
  { timestamps: true }
)

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password)
  return isMatch
}

module.exports = mongoose.model("User", UserSchema)
