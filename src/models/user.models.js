import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  avatar: {
    type: {
      url: String,
      localPath: String,
    },
    default: {
      url: "https://placehold.co/200*200",
      localPath: "",
    },
  },
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  fullName: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    require: [true, "Password is required"],
  },
  isEmailVerifies: {
    type: String
  },
  refreshToken: {
    type: String
  }
});

export const userSchema = mongoose.model("User", userSchema);
