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
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "54bbae44950389",
        pass: "1ca495e5a23218",
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
      from: "sagarghosh0610@gmail.com",
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
