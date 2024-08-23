ALTER TABLE "sps_bg_invoice" ADD COLUMN "payment_url" text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_bg_invoice" ADD COLUMN "success_url" text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_bg_invoice" ADD COLUMN "cancel_url" text DEFAULT '' NOT NULL;