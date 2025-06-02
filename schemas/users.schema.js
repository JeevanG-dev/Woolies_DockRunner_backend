import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    employeeid: {
      type: String,
      unique: true,
      required: true,
      minlength: 7,
      maxlength: 7,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
