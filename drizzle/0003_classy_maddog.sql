CREATE TABLE IF NOT EXISTS "verifacteion_codes" (
	"id" bigint PRIMARY KEY NOT NULL,
	"code" varchar(128) NOT NULL,
	"user_id" bigint
);
--> statement-breakpoint
ALTER TABLE "auth_otp" ALTER COLUMN "phone" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "auth_otp" ALTER COLUMN "email" SET NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "verifacteion_codes" ADD CONSTRAINT "verifacteion_codes_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "auth_otp" ADD CONSTRAINT "auth_otp_email_unique" UNIQUE("email");