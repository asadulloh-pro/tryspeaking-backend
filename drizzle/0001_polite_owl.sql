ALTER TABLE "auth_otp" DROP CONSTRAINT "auth_otp_id_unique";--> statement-breakpoint
ALTER TABLE "verification_codes" DROP CONSTRAINT "verification_codes_id_unique";--> statement-breakpoint
ALTER TABLE "auth_otp" ADD CONSTRAINT "authOtps_id_unique" UNIQUE("id");--> statement-breakpoint
ALTER TABLE "verification_codes" ADD CONSTRAINT "verificationCodes_id_unique" UNIQUE("id");