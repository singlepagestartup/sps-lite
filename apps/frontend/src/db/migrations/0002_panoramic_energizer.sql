CREATE TABLE IF NOT EXISTS "sps_w_b_pages_to_widgets" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"page_id" uuid NOT NULL,
	"widget_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_pages_to_widgets" ADD CONSTRAINT "sps_w_b_pages_to_widgets_page_id_sps_w_b_pages_id_fk" FOREIGN KEY ("page_id") REFERENCES "sps_w_b_pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_pages_to_widgets" ADD CONSTRAINT "sps_w_b_pages_to_widgets_widget_id_sps_w_b_widgets_id_fk" FOREIGN KEY ("widget_id") REFERENCES "sps_w_b_widgets"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
