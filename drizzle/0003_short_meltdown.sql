ALTER TABLE "auth_otp" DROP CONSTRAINT "autu_otp_id_unique";--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "users_id_unique";--> statement-breakpoint
ALTER TABLE "verification_codes" DROP CONSTRAINT "verificationCodes_id_unique";