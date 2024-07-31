CREATE TABLE IF NOT EXISTS "sps_rc_ws_to_is_bs_vs2" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"class_name" text,
	"wt_id" uuid NOT NULL,
	"is_bk_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_rc_ws_to_is_bs_vs2" ADD CONSTRAINT "sps_rc_ws_to_is_bs_vs2_wt_id_sps_rc_widget_id_fk" FOREIGN KEY ("wt_id") REFERENCES "public"."sps_rc_widget"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_rc_ws_to_is_bs_vs2" ADD CONSTRAINT "sps_rc_ws_to_is_bs_vs2_is_bk_id_sps_rc_is_bk_d2l_id_fk" FOREIGN KEY ("is_bk_id") REFERENCES "public"."sps_rc_is_bk_d2l"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
