CREATE TABLE IF NOT EXISTS "sps_w_b_ws_to_ct_bs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"class_name" text,
	"wt_id" uuid NOT NULL,
	"ct_bk_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ws_to_ct_bs" ADD CONSTRAINT "sps_w_b_ws_to_ct_bs_wt_id_sps_w_b_widgets_id_fk" FOREIGN KEY ("wt_id") REFERENCES "public"."sps_w_b_widgets"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ws_to_ct_bs" ADD CONSTRAINT "sps_w_b_ws_to_ct_bs_ct_bk_id_sps_w_b_ct_bs_c2s_id_fk" FOREIGN KEY ("ct_bk_id") REFERENCES "public"."sps_w_b_ct_bs_c2s"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
