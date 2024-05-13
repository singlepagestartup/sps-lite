CREATE TABLE IF NOT EXISTS "sps_w_b_nr_bs_to_bs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"nk_id" uuid NOT NULL,
	"bn_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_nr_bs_to_bs" ADD CONSTRAINT "sps_w_b_nr_bs_to_bs_nk_id_sps_w_b_nr_bk_id_fk" FOREIGN KEY ("nk_id") REFERENCES "sps_w_b_nr_bk"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_nr_bs_to_bs" ADD CONSTRAINT "sps_w_b_nr_bs_to_bs_bn_id_sps_w_b_button_id_fk" FOREIGN KEY ("bn_id") REFERENCES "sps_w_b_button"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
