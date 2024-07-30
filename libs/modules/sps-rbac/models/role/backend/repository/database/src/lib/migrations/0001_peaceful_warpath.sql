ALTER TABLE "sps_rc_role" ADD COLUMN "uid" text NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_rc_role" ADD CONSTRAINT "sps_rc_role_uid_unique" UNIQUE("uid");