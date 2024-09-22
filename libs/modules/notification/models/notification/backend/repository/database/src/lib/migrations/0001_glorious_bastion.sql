ALTER TABLE "sps_nn_notification" ALTER COLUMN "type" SET DEFAULT 'text';--> statement-breakpoint
ALTER TABLE "sps_nn_notification" ADD COLUMN "method" text DEFAULT 'email' NOT NULL;