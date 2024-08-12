CREATE TABLE IF NOT EXISTS "sps_ee_ws_to_os_lt_bs_ov4" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"class_name" text,
	"wt_id" uuid NOT NULL,
	"os_lt_bk_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_ee_ws_to_os_lt_bs_ov4" ADD CONSTRAINT "sps_ee_ws_to_os_lt_bs_ov4_wt_id_sps_ee_widget_id_fk" FOREIGN KEY ("wt_id") REFERENCES "public"."sps_ee_widget"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_ee_ws_to_os_lt_bs_ov4" ADD CONSTRAINT "sps_ee_ws_to_os_lt_bs_ov4_os_lt_bk_id_sps_ee_os_lt_bk_vz7_id_fk" FOREIGN KEY ("os_lt_bk_id") REFERENCES "public"."sps_ee_os_lt_bk_vz7"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
