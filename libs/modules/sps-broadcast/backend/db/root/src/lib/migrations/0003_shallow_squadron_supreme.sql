ALTER TABLE "sps_b_channel" ADD COLUMN "title" text NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_b_message" ADD COLUMN "expires_at" timestamp;--> statement-breakpoint
ALTER TABLE "sps_b_message" ADD COLUMN "payload" text NOT NULL;