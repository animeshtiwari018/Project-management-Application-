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

  

});

export const userSchema = mongoose.model("User", userSchema);
