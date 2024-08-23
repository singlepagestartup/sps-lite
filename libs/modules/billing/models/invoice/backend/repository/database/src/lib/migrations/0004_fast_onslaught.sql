ALTER TABLE "sps_bg_invoice" ADD COLUMN "provider_id" text;--> statement-breakpoint
ALTER TABLE "sps_bg_invoice" ADD COLUMN "provider" text DEFAULT 'stripe';