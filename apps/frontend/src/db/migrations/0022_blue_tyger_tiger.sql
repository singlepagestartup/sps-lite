CREATE TABLE IF NOT EXISTS "sps_w_b_bs_as_to_bs_i0l" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"direction" text DEFAULT 'default' NOT NULL,
	"by_id" uuid NOT NULL,
	"bn_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_bs_as_to_bs_i0l" ADD CONSTRAINT "sps_w_b_bs_as_to_bs_i0l_by_id_sps_w_b_bs_ay_8m3_id_fk" FOREIGN KEY ("by_id") REFERENCES "public"."sps_w_b_bs_ay_8m3"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_bs_as_to_bs_i0l" ADD CONSTRAINT "sps_w_b_bs_as_to_bs_i0l_bn_id_sps_w_b_button_id_fk" FOREIGN KEY ("bn_id") REFERENCES "public"."sps_w_b_button"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
