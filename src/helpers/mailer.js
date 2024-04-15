import User from "@/models/user.model";
import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          verifyToken: hashedToken,
          verifyTokenExpiry: Date.now() + 3600000, // expires in 1 hr
        },
      });
    }

    if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          forgotPasswordToken: hashedToken,
          forgotPasswordTokenExpiry: Date.now() + 3600000, // expires in 1 hr
        },
      });
    }
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const verifyMail = `<p>Click <a href="${
      process.env.DOMAIN
    }/verifyemail?token=${hashedToken}">here</a> to
    ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
    or copy and paste the link below in your browser.
    <br>
    ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
    </p>`;

    const resetMail = `<p>Click <a href="${
      process.env.DOMAIN
    }/forgotpassword?token=${hashedToken}">here</a> to
        ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
        or copy and paste the link below in your browser.
        <br>
        ${process.env.DOMAIN}/forgotpassword?token=${hashedToken}
        </p>`;

    const mailOptions = {
      from: process.env.EMAIL_SENDER,
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: emailType === "VERIFY" ? verifyMail : resetMail,
    };
    const mailResponse = await transport.sendMail(mailOptions);

    return mailResponse;
  } catch (error) {
    throw new Error(error.message);
  }
};
