CREATE TABLE IF NOT EXISTS "sps_ee_ws_to_ps_lt_bs_cl9" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"class_name" text,
	"wt_id" uuid NOT NULL,
	"ps_lt_bk_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_ee_ws_to_ps_lt_bs_cl9" ADD CONSTRAINT "sps_ee_ws_to_ps_lt_bs_cl9_wt_id_sps_ee_widget_id_fk" FOREIGN KEY ("wt_id") REFERENCES "public"."sps_ee_widget"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_ee_ws_to_ps_lt_bs_cl9" ADD CONSTRAINT "sps_ee_ws_to_ps_lt_bs_cl9_ps_lt_bk_id_sps_ee_ps_lt_bk_dc2_id_fk" FOREIGN KEY ("ps_lt_bk_id") REFERENCES "public"."sps_ee_ps_lt_bk_dc2"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
