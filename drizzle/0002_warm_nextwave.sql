ALTER TABLE "auth_otp" DROP CONSTRAINT "authOtps_id_unique";--> statement-breakpoint
ALTER TABLE "auth_otp" ADD CONSTRAINT "autu_otp_id_unique" UNIQUE("id");