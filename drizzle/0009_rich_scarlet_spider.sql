ALTER TABLE "auth_otp" DROP CONSTRAINT "auth_otp_id_unique";--> statement-breakpoint
ALTER TABLE "auth_otp" DROP CONSTRAINT "auth_otp_email_unique";--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "users_id_unique";--> statement-breakpoint
ALTER TABLE "verification_codes" DROP CONSTRAINT "verification_codes_id_unique";