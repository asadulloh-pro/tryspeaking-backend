import { db } from "@/config/db.config";
import { users } from "@/config/schema.config";

export async function getUsers() {
  const users_list = await db.select().from(users);
  return users_list;
}
