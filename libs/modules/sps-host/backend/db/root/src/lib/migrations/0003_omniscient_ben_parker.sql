CREATE TABLE IF NOT EXISTS "sps_h_ws_to_el_ms_1g0" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"class_name" text,
	"wt_id" uuid NOT NULL,
	"external_module" text DEFAULT 'sps-website-builder' NOT NULL,
	"external_module_props" text DEFAULT '' NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_h_ws_to_el_ms_1g0" ADD CONSTRAINT "sps_h_ws_to_el_ms_1g0_wt_id_sps_h_widget_id_fk" FOREIGN KEY ("wt_id") REFERENCES "public"."sps_h_widget"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
