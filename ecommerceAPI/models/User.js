const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const UserSchema = new mongoose.Schema({
  username: { type: string, required: true, unique: true },
  email: { type: string, required: true, unique: true },
  password: { type: string, required: true },
  isAdmin: {
    type: Boolean,
    default: false,
  },
}
{timestamps:true}
);

model.exports = mongoose.model("User",UserSchema);
