ALTER TABLE "auth_otp" DROP CONSTRAINT "auth_otp_id_unique";--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "users_id_unique";--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "username" varchar(256);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "bio" varchar(256);