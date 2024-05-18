CREATE TABLE IF NOT EXISTS "sps_w_b_ws_to_ms_3ei" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"wt_id" uuid NOT NULL,
	"module_name" text NOT NULL,
	"module_widget_id" uuid
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ws_to_ms_3ei" ADD CONSTRAINT "sps_w_b_ws_to_ms_3ei_wt_id_sps_w_b_widgets_id_fk" FOREIGN KEY ("wt_id") REFERENCES "public"."sps_w_b_widgets"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
