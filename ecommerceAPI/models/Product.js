const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({
  title: { type: string, required: true, unique: true },
  desc: { type: string, required: true },
  img: { type: string, required: true },
  categories: { type: array},
  size: { type: string },
  color: { type: string },
  price: { type: number, required: true },
  
}
{timestamps:true}
);

model.exports = mongoose.model("User",UserSchema);
