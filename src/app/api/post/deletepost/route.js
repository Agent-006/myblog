import { connectDB } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import Post from "@/models/post.model";

await connectDB();

export async function DELETE(request) {
  try {
    const searchParams = await request.nextUrl.searchParams;
    const postId = searchParams.get("postId");

    const isDeleted = await Post.findByIdAndDelete(postId);

    if (!isDeleted) {
      return NextResponse.json(
        {
          success: false,
          message: "Something went wrong while deleting the post",
        },
        {
          status: 403,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Post deleted successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("An unexpected error occured deleting the post");
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occured deleting the post",
      },
      {
        status: 500,
      }
    );
  }
}
