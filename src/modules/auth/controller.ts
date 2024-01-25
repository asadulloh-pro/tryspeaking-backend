import nodemailer from "nodemailer";
import { google } from "googleapis";
import { Request, Response } from "express";
import { IAuthOtps } from "../../types/user";
import { createVrificateCode, getGmail } from "./query";

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(
  clientId,
  clientSecret,
  "https://developers.google.com/oauthplayground"
);

oAuth2Client.setCredentials({ refresh_token: refreshToken });

async function getAccessToken() {
  const accessToken = await oAuth2Client.getAccessToken();
  return accessToken.token;
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    type: "OAuth2",
    user: "beretax308@gmail.com",
    clientId,
    clientSecret,
    refreshToken,
    accessToken: getAccessToken(),
  },
} as any);

export const POST = async (req: Request, res: Response) => {
  const body = req.body as IAuthOtps;

  const verificationCode = (Math.random() * 100000).toFixed();

  const mailOptions = {
    from: "beretax308@gmail.com",
    to: body.email,
    subject: "Код подтверждения",
    text: `Ваш код подтверждения: ${verificationCode}`,
  };

  await getGmail(body);
  await createVrificateCode({
    id: Date.now(),
    userId: body.userId,
    code: `${verificationCode}`,
  });

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Ошибка при отправке электронного письма:", error);
    } else {
      console.log("Электронное письмо отправлено: " + info.response);
    }
  });

  res.json(`Электронное письмо отправлено: ${body.email}`);
};
