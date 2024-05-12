CREATE TABLE IF NOT EXISTS "sps_w_b_fs_to_ws" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"fr_id" uuid NOT NULL,
	"wt_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_ws_to_fr_bs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"wt_id" uuid NOT NULL,
	"fk_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_fs_to_ws" ADD CONSTRAINT "sps_w_b_fs_to_ws_fr_id_sps_w_b_footers_id_fk" FOREIGN KEY ("fr_id") REFERENCES "sps_w_b_footers"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_fs_to_ws" ADD CONSTRAINT "sps_w_b_fs_to_ws_wt_id_sps_w_b_widgets_id_fk" FOREIGN KEY ("wt_id") REFERENCES "sps_w_b_widgets"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ws_to_fr_bs" ADD CONSTRAINT "sps_w_b_ws_to_fr_bs_wt_id_sps_w_b_widgets_id_fk" FOREIGN KEY ("wt_id") REFERENCES "sps_w_b_widgets"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ws_to_fr_bs" ADD CONSTRAINT "sps_w_b_ws_to_fr_bs_fk_id_sps_w_b_fr_bk_id_fk" FOREIGN KEY ("fk_id") REFERENCES "sps_w_b_fr_bk"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
