CREATE TABLE IF NOT EXISTS "sps_ee_ws_to_pt_ow_bs_b3c" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"class_name" text,
	"wt_id" uuid NOT NULL,
	"pt_ow_bk_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_ee_ws_to_pt_ow_bs_b3c" ADD CONSTRAINT "sps_ee_ws_to_pt_ow_bs_b3c_wt_id_sps_ee_widget_id_fk" FOREIGN KEY ("wt_id") REFERENCES "public"."sps_ee_widget"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_ee_ws_to_pt_ow_bs_b3c" ADD CONSTRAINT "sps_ee_ws_to_pt_ow_bs_b3c_pt_ow_bk_id_sps_ee_pt_ow_bk_dl6_id_fk" FOREIGN KEY ("pt_ow_bk_id") REFERENCES "public"."sps_ee_pt_ow_bk_dl6"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
