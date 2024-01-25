CREATE TABLE IF NOT EXISTS "verifaction_codes" (
	"id" bigint PRIMARY KEY NOT NULL,
	"code" varchar(128),
	"user_id" bigint
);
--> statement-breakpoint
DROP TABLE "verifacteion_codes";--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "verifaction_codes" ADD CONSTRAINT "verifaction_codes_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
