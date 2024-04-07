import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    image: {
      type: String, // cloudinary url
      required: [ture, "Please provide an image"],
    },
    title: {
      type: String,
      required: [true, "Please provide a title"],
    },
    content: {
      type: String,
      required: [true, "Please provide a content"],
    },
    category: {
      type: String,
      required: [ture, "Please provide a category"],
    },
  },
  { timestamps: true }
);

const Post = mongoose.models.posts || mongoose.model("posts", postSchema);

export default Post;
