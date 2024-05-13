ALTER TABLE "sps_w_b_nr_bs_to_bs" ADD COLUMN "place" text DEFAULT 'default';--> statement-breakpoint
ALTER TABLE "sps_w_b_nr_bs_to_bs" ADD COLUMN "order_index" integer DEFAULT 0 NOT NULL;