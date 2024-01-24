import { getUsers } from "./query";
import type { Request, Response } from "express";

export const GET = async (req: Request, res: Response) => {
  const users = await getUsers();
  res.json({ users });
};
