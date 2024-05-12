CREATE TABLE IF NOT EXISTS "sps_w_b_navbars_to_widgets" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"navbar_id" uuid NOT NULL,
	"widget_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_navbars_to_widgets" ADD CONSTRAINT "sps_w_b_navbars_to_widgets_navbar_id_sps_w_b_navbars_id_fk" FOREIGN KEY ("navbar_id") REFERENCES "sps_w_b_navbars"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_navbars_to_widgets" ADD CONSTRAINT "sps_w_b_navbars_to_widgets_widget_id_sps_w_b_widgets_id_fk" FOREIGN KEY ("widget_id") REFERENCES "sps_w_b_widgets"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
