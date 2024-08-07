CREATE TABLE IF NOT EXISTS "sps_w_b_ct_sn_bs_to_ss_fe_se_ws_a0n" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"class_name" text,
	"ct_sn_bk_id" uuid NOT NULL,
	"sps_fe_se_wt_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ct_sn_bs_to_ss_fe_se_ws_a0n" ADD CONSTRAINT "sps_w_b_ct_sn_bs_to_ss_fe_se_ws_a0n_ct_sn_bk_id_sps_w_b_ct_sn_bs_id_fk" FOREIGN KEY ("ct_sn_bk_id") REFERENCES "public"."sps_w_b_ct_sn_bs"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
