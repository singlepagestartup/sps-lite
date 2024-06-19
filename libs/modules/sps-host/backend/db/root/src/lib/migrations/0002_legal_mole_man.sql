CREATE TABLE IF NOT EXISTS "sps_h_ws_to_ss_we_br_me_ws_qph" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"class_name" text,
	"wt_id" uuid NOT NULL,
	"sps_we_br_me_wt_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_h_ws_to_ss_we_br_me_ws_qph" ADD CONSTRAINT "sps_h_ws_to_ss_we_br_me_ws_qph_wt_id_sps_h_widget_id_fk" FOREIGN KEY ("wt_id") REFERENCES "public"."sps_h_widget"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
