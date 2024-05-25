ALTER TABLE "sps_w_b_nr_bk" ADD COLUMN "subtitle" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_nr_bk" ADD COLUMN "title" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_nr_bs_to_bs_as_njg" ADD COLUMN "position" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_nr_bs_to_bs_as_njg" ADD COLUMN "class_name" text;