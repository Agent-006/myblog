import Post from "@/models/post.model";
import { NextResponse } from "next/server";
import { connectDB } from "@/dbConfig/dbConfig";

await connectDB();

export async function POST(request) {
  try {
    const searchParams = await request.nextUrl.searchParams;

    const postId = searchParams.get("postId");

    const post = await Post.findById(postId);

    if (!post) {
      return NextResponse.json(
        {
          success: false,
          message: "Post not found !",
        },
        {
          status: 404,
        }
      );
    }

    const detailedPost = await Post.aggregate([
      { $match: { owner: post.owner } },
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

    const data = detailedPost.filter((post) => post._id == postId);

    return NextResponse.json(
      {
        success: true,
        message: "Post found !",
        data: data[0],
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}
