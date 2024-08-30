ALTER TABLE "sps_nn_notification" ADD COLUMN "payload" text;--> statement-breakpoint
ALTER TABLE "sps_nn_notification" DROP COLUMN IF EXISTS "type";--> statement-breakpoint
ALTER TABLE "sps_nn_notification" DROP COLUMN IF EXISTS "subtitle";--> statement-breakpoint
ALTER TABLE "sps_nn_notification" DROP COLUMN IF EXISTS "description";--> statement-breakpoint
ALTER TABLE "sps_nn_notification" DROP COLUMN IF EXISTS "content";