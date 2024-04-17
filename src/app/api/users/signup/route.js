import { connectDB } from "@/dbConfig/dbConfig";
import User from "@/models/user.model";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

connectDB();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { fullname, username, email, password, bio } = reqBody;
    if (!fullname || !username || !email || !password || !bio) {
      return Response.json(
        {
          success: false,
          message: "All fields are required",
        },
        {
          status: 401,
        }
      );
    }

    const user = await User.findOne({
      username,
      email,
    });
    if (user) {
      return Response.json(
        {
          success: false,
          message:
            "Username or email already exist. Please provide a unique username or email",
        },
        {
          status: 401,
        }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      fullname,
      username,
      email,
      password: hashedPassword,
      bio,
    });

    const savedUser = await newUser.save();
    // send verification email

    await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });

    return Response.json(
      {
        success: true,
        message:
          "User successfully registered and verification email has been send.",
        savedUser,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return Response.json(
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
