import { Request, Response } from "express";
import { IAuthOtps } from "../../types/user";
import { createVrificateCode, getGmail } from "./query";
import { transporter } from "./utils";

export const POST = async (req: Request, res: Response) => {
  const body = req.body as IAuthOtps;

  const verificationCode = (Math.random() * 100000).toFixed();

  const mailOptions = {
    from: "beretax308@gmail.com",
    to: body.gmail,
    subject: "Код подтверждения",
    text: `Ваш код подтверждения: ${verificationCode}`,
  };

  await getGmail(body);
  await createVrificateCode({
    id: Date.now(),
    userId: body.userId,
    code: `${verificationCode}`,
  });

  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) {
      console.error("Ошибка при отправке электронного письма:", error);
    } else {
      console.log("Электронное письмо отправлено: " + info.response);
    }
  });

  res.json(`Электронное письмо отправлено: ${body.gmail}`);
};
