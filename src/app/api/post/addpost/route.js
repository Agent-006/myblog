import Post from "@/models/post.model";
import { NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { connectDB } from "@/dbConfig/dbConfig";
import { uploadOnCloudinary } from "@/helpers/cloudinary";

await connectDB();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const userId = await getDataFromToken(request);
    const { title, category, content } = reqBody;
    console.log(request);
    console.log(request.files)
    
    if ([title, category, content].some((field) => field?.trim() === "")) {
      return NextResponse.json(
        {
          success: false,
          message: "Title, tag and content fields are required",
        },
        {
          status: 400,
        }
      );
    }
    // TODO: handle the image part
    const imageLocalPath = request.files?.imageFile[0]?.path;

    if (imageLocalPath) {
      const imageFile = await uploadOnCloudinary(imageLocalPath);

      if (!imageFile.url) {
        return NextResponse.json(
          {
            success: false,
            message: "Error in adding image to database",
          },
          {
            status: 403,
          }
        );
      }

      const post = await Post.create({
        title,
        content,
        category,
        imageFile: imageFile.url,
        owner: userId,
      });

      if (!post) {
        return NextResponse.json(
          {
            success: false,
            message: "Something went wrong while adding post to database",
          },
          {
            status: 403,
          }
        );
      }

      return NextResponse.json(
        {
          success: true,
          message: "Post uploaded successfully",
          data: post,
        },
        {
          status: 200,
        }
      );
    }

    const post = await Post.create({
      title,
      content,
      category,
      owner: userId,
    });

    if (!post) {
      return NextResponse.json(
        {
          success: false,
          message: "Something went wrong while adding post to database",
        },
        {
          status: 403,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Post uploaded successfully",
        data: post,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
