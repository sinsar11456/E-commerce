const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);

model.exports = mongoose.model("User", UserSchema);
