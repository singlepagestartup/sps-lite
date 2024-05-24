CREATE TABLE IF NOT EXISTS "sps_w_b_fr_bs_to_bs_as_d3j" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"direction" text DEFAULT 'default' NOT NULL,
	"fk_id" uuid NOT NULL,
	"by_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_fr_bs_to_bs_as_d3j" ADD CONSTRAINT "sps_w_b_fr_bs_to_bs_as_d3j_fk_id_sps_w_b_fr_bk_id_fk" FOREIGN KEY ("fk_id") REFERENCES "public"."sps_w_b_fr_bk"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_fr_bs_to_bs_as_d3j" ADD CONSTRAINT "sps_w_b_fr_bs_to_bs_as_d3j_by_id_sps_w_b_bs_ay_8m3_id_fk" FOREIGN KEY ("by_id") REFERENCES "public"."sps_w_b_bs_ay_8m3"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
