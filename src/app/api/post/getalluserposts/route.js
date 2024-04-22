import { connectDB } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import Post from "@/models/post.model";
import mongoose from "mongoose";

await connectDB();

export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get("userId");
    const decodedUserId = new mongoose.Types.ObjectId(userId);
    const userPosts = await Post.aggregate([
      { $match: { owner: decodedUserId } },
      {
        $lookup: {
          from: "users",
          localField: "owner",
          foreignField: "_id",
          as: "author",
          pipeline: [
            {
              $project: {
                fullname: 1,
                username: 1,
                email: 1,
                isVerified: 1,
                isAdmin: 1,
              },
            },
          ],
        },
      },
      {
        $addFields: {
          author: {
            $first: "$author", // this will return an object rather than an array.
          },
        },
      },
    ]);

    if (!userPosts) {
      return NextResponse.json(
        {
          success: false,
          message: "Something went wrong while fetching user posts",
        },
        {
          status: 400,
        }
      );
    }
    return NextResponse.json(
      {
        success: true,
        message: "all user posts fetched successfully",
        data: userPosts,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("An unexpected error occured while fetching user posts");
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occured while fetching user posts",
      },
      {
        status: 500,
      }
    );
  }
}
