import mongoose, { Schema } from "mongoose";

const likeSchema = new Schema({
    likedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
    },
});

const Like = mongoose.models.likes || mongoose.model("likes", likeSchema);

export default Like;
