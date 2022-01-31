const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { Schema } = mongoose

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "Please provide  fnirst ame"],
    maxlength: 50,
    minlength: 3,
  },
  lastName: {
    type: String,
    required: [true, "Please provide name"],
    maxlength: 50,
    minlength: 3,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Please provide a valid email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
  },
  companyName: {
    type: String,
    required: [true, "Please provide a company name"],
    maxlength: [50, "company must have a max length of 50 characters"],
    minlength: [3, "company must have at least 3 characters"],
    unique: true
  },
  abn: {
    type: Number,
    maxlength: 50,
    minlength: 3,
    unique: true
  },
  userType: {
    type: String,
    enum: ["Project Manager", "Trade Provider"],
    default: "Trade Provider",
    required: true
  },
  trades: {
    type: [Schema.Types.ObjectId],
    required: false,
    ref: "Trade"
  }

},
{ timestamps: true }
)

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id, name: this.name }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  })
}

UserSchema.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password)
  return isMatch
}

module.exports = mongoose.model("User", UserSchema)
