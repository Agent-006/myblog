import { connectDB } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";

connectDB();

export async function POST(request) {
  try {
    const response = NextResponse.json(
      {
        success: true,
        message: "Logout successfully",
      },
      {
        status: 200,
      }
    );

    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    return response;
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
