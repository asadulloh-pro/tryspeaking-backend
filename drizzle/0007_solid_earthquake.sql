ALTER TABLE "auth_otp" ADD CONSTRAINT "auth_otp_id_unique" UNIQUE("id");--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_id_unique" UNIQUE("id");--> statement-breakpoint
ALTER TABLE "verifaction_codes" ADD CONSTRAINT "verifaction_codes_id_unique" UNIQUE("id");