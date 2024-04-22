import { connectDB } from "@/dbConfig/dbConfig";
import Post from "@/models/post.model";
import { NextResponse } from "next/server";

await connectDB();

export async function POST(request) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get("category");

    if (category) {
      const queryPost = await Post.aggregate([
        {
          $match: {
            category: category,
          },
        },
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
              $first: "$author",
            },
          },
        },
      ]);

      if (!queryPost) {
        return NextResponse.json(
          {
            success: false,
            message: "Something went wrong while quering the database",
          },
          {
            status: 403,
          }
        );
      }

      return NextResponse.json(
        {
          success: true,
          message: "Successfully fetched queried posts",
          data: queryPost,
        },
        {
          status: 200,
        }
      );
    }

    const allPost = await Post.aggregate([
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

    if (!allPost) {
      return NextResponse.json(
        {
          success: false,
          message: "Something went wrong while fetching all posts",
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Posts fetched successfully",
        data: allPost,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occured while fetching all posts",
      },
      {
        status: 500,
      }
    );
  }
}
