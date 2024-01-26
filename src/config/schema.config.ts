import { index, pgTable, bigint, varchar } from "drizzle-orm/pg-core";

export var users = pgTable(
  "users",
  {
    id: bigint("id", { mode: "number" }).primaryKey().unique("users_id_unique"),
    fullname: varchar("full_name", { length: 256 }),
    username: varchar("user_name", { length: 256 }),
    bio: varchar("bio", { length: 256 }),
  },
  (users) => ({
    nameIdx: index("name_idx").on(users.fullname),
  })
);

export var authOtps = pgTable("auth_otp", {
  id: bigint("id", { mode: "number" })
    .primaryKey()
    .unique("auth_otp_id_unique"),
  gmail: varchar("gmial", { length: 256 }),
  userId: bigint("user_id", { mode: "number" }).references(() => users.id),
});

export var verificationCodes = pgTable("verification_codes", {
  id: bigint("id", { mode: "number" })
    .primaryKey()
    .unique("verification_codes_id_unique"),
  code: varchar("code", { length: 128 }),
  userId: bigint("user_id", { mode: "number" }).references(() => users.id),
});
