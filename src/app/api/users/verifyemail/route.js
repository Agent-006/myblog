import { connectDB } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import User from "@/models/user.model";

await connectDB();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { token } = reqBody.data;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Token not found, Invalid request",
        },
        {
          status: 400,
        }
      );
    }

    const decodedURIToken = decodeURIComponent(token)
    
    const user = await User.findOne({
      verifyToken: decodedURIToken,
      verifyTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid token",
        },
        {
          status: 400,
        }
      );
    }

    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;

    await user.save();

    return NextResponse.json(
      {
        success: true,
        message: "Email verified successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: true,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
