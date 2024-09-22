ALTER TABLE "sps_nn_notification" ADD COLUMN "data" text;--> statement-breakpoint
ALTER TABLE "sps_nn_notification" DROP COLUMN IF EXISTS "payload";