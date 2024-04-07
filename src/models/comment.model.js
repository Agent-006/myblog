import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
    content: {
      type: String,
      required: [ture, "Please provide a comment"],
    },
  },
  { timestamps: true }
);

const Comment =
  mongoose.models.comments || mongoose.model("comments", commentSchema);

export default Comment;
