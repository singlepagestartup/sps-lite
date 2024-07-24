ALTER TABLE "sps_w_b_nr_bk" ADD COLUMN IF NOT EXISTS "subtitle" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_nr_bk" ADD COLUMN IF NOT EXISTS "title" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_nr_bs_to_bs_as_njg" ADD COLUMN IF NOT EXISTS "position" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_nr_bs_to_bs_as_njg" ADD COLUMN IF NOT EXISTS "class_name" text;