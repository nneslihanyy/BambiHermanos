const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "user", enum: ["user", "admin"] },
  avatar: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
