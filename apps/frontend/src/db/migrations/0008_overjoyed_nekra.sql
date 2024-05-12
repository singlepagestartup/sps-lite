CREATE TABLE IF NOT EXISTS "sps_w_b_ws_to_sr_bs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"wt_id" uuid NOT NULL,
	"sk_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ws_to_sr_bs" ADD CONSTRAINT "sps_w_b_ws_to_sr_bs_wt_id_sps_w_b_widgets_id_fk" FOREIGN KEY ("wt_id") REFERENCES "sps_w_b_widgets"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ws_to_sr_bs" ADD CONSTRAINT "sps_w_b_ws_to_sr_bs_sk_id_sps_w_b_sr_bk_id_fk" FOREIGN KEY ("sk_id") REFERENCES "sps_w_b_sr_bk"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
