import { db } from "@/config/db.config";
import { authOtps, verificationCodes } from "@/config/schema.config";
import { IAuthOtps, IVerificationCode } from "@/types/user";

export const getGmail = async (body: IAuthOtps) => {
  try {
    const response = await db.insert(authOtps).values({
      id: Date.now(),
      gmail: body.gmail,
      userId: body.userId,
    });
    return response;
  } catch (error) {
    const e = error as Error;
    console.log(e.message);
  }
};

export const createVrificateCode = async (data: IVerificationCode) => {
  try {
    const response = await db.insert(verificationCodes).values(data);
    return response;
  } catch (error) {
    const e = error as Error;
    console.log(e.message);
  }
};
