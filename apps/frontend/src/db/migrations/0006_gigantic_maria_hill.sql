CREATE TABLE IF NOT EXISTS "sps_w_b_ws_to_ss_fe_se_me_ws_zb8" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"wt_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ws_to_ss_fe_se_me_ws_zb8" ADD CONSTRAINT "sps_w_b_ws_to_ss_fe_se_me_ws_zb8_wt_id_sps_w_b_widgets_id_fk" FOREIGN KEY ("wt_id") REFERENCES "public"."sps_w_b_widgets"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
