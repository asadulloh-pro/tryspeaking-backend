CREATE TABLE IF NOT EXISTS "auth_otp" (
	"id" bigint PRIMARY KEY NOT NULL,
	"gmial" varchar(256),
	"user_id" bigint,
	CONSTRAINT "auth_otp_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" bigint PRIMARY KEY NOT NULL,
	"full_name" varchar(256),
	"user_name" varchar(256),
	"bio" varchar(256),
	CONSTRAINT "users_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "verification_codes" (
	"id" bigint PRIMARY KEY NOT NULL,
	"code" varchar(128),
	"user_id" bigint,
	CONSTRAINT "verification_codes_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "users" ("full_name");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "auth_otp" ADD CONSTRAINT "auth_otp_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "verification_codes" ADD CONSTRAINT "verification_codes_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
