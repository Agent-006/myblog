import { connectDB } from "@/dbConfig/dbConfig";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

await connectDB();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { userId } = reqBody;

    const user = await User.findOne({ _id: userId });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "User found !",
        data: user,
      },
      {
        status: 200,
      }
    );
  } catch (error) {}
}
