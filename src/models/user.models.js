import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({});

export const userSchema = mongoose.model("User", userSchema);
