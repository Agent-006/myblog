import { connectDB } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

connectDB();

export async function GET(request) {
  const userId = await getDataFromToken(request);

  const user = await User.findOne({ _id: userId }).select("-password");

  if (!user) {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid token, user does not exists",
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: "User found",
      data: user,
    },
    {
      status: 200,
    }
  );
}
