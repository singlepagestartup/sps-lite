CREATE TABLE IF NOT EXISTS "sps_r_ws_to_an_bs_7t6" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"class_name" text,
	"wt_id" uuid NOT NULL,
	"ak_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_r_ws_to_an_bs_7t6" ADD CONSTRAINT "sps_r_ws_to_an_bs_7t6_wt_id_sps_r_widget_id_fk" FOREIGN KEY ("wt_id") REFERENCES "public"."sps_r_widget"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_r_ws_to_an_bs_7t6" ADD CONSTRAINT "sps_r_ws_to_an_bs_7t6_ak_id_sps_r_an_bk_iht_id_fk" FOREIGN KEY ("ak_id") REFERENCES "public"."sps_r_an_bk_iht"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
