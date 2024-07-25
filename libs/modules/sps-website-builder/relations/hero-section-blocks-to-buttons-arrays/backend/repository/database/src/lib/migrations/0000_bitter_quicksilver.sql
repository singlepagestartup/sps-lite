CREATE TABLE IF NOT EXISTS "sps_w_b_ho_sn_bs_to_bs_as_pmd" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"class_name" text,
	"hk_id" uuid NOT NULL,
	"by_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ho_sn_bs_to_bs_as_pmd" ADD CONSTRAINT "sps_w_b_ho_sn_bs_to_bs_as_pmd_hk_id_sps_w_b_ho_sn_bs_id_fk" FOREIGN KEY ("hk_id") REFERENCES "public"."sps_w_b_ho_sn_bs"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ho_sn_bs_to_bs_as_pmd" ADD CONSTRAINT "sps_w_b_ho_sn_bs_to_bs_as_pmd_by_id_sps_w_b_bs_ay_8m3_id_fk" FOREIGN KEY ("by_id") REFERENCES "public"."sps_w_b_bs_ay_8m3"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
