CREATE TABLE IF NOT EXISTS "sps_cm_ws_to_rt_bs_qd3" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"class_name" text,
	"wt_id" uuid NOT NULL,
	"rt_bk_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_cm_ws_to_rt_bs_qd3" ADD CONSTRAINT "sps_cm_ws_to_rt_bs_qd3_wt_id_sps_cm_widget_id_fk" FOREIGN KEY ("wt_id") REFERENCES "public"."sps_cm_widget"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_cm_ws_to_rt_bs_qd3" ADD CONSTRAINT "sps_cm_ws_to_rt_bs_qd3_rt_bk_id_sps_cm_rt_bk_id_fk" FOREIGN KEY ("rt_bk_id") REFERENCES "public"."sps_cm_rt_bk"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
