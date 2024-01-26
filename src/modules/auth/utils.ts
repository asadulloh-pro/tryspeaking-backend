import nodemailer from "nodemailer";
import { google } from "googleapis";

////  utils for auth session
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

export const transporter = nodemailer.createTransport({
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
/////////////
