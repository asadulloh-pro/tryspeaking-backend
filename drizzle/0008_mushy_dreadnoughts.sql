ALTER TABLE "verifaction_codes" RENAME TO "verification_codes";--> statement-breakpoint
ALTER TABLE "verification_codes" DROP CONSTRAINT "verifaction_codes_id_unique";--> statement-breakpoint
ALTER TABLE "verification_codes" DROP CONSTRAINT "verifaction_codes_user_id_users_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "verification_codes" ADD CONSTRAINT "verification_codes_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "verification_codes" ADD CONSTRAINT "verification_codes_id_unique" UNIQUE("id");