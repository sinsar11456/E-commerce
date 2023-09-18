const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: string, required: true },
    product: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: {type:Number, required : true},
    address:{type: Object, required: true},
    status: {type:String, default:"pending"},
  },
  { timestamps: true }
);

model.exports = mongoose.model("User", UserSchema);
