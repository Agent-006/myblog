import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: [true, "Please provide a fullname"],
    },
    username: {
      type: String,
      required: [true, "Please provide an username"],
      unique: [true, "Username must be unique"],
    },
    email: {
      type: String,
      required: [true, "Please provide an valid email"],
      unique: [true, "Email must be unique"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
    bio: {
      type: String,
      required: [true, "Please set a bio"],
    },
    avatar: {
      type: String, // cloudinary url
    },
    coverImage: {
      type: String, // cloudinary url
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    posts: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
    verifyToken: String,
    verifyTokenExpiry: Date,
  },
  { timestamps: true }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
