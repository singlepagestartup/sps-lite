ALTER TABLE "sps_bg_pt_it" ADD COLUMN "interval" text;--> statement-breakpoint
ALTER TABLE "sps_bg_pt_it" ADD COLUMN "type" text DEFAULT 'one_off' NOT NULL;