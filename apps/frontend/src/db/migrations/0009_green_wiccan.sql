CREATE TABLE IF NOT EXISTS "sps_w_b_layouts_to_footers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"layout_id" uuid NOT NULL,
	"footer_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_layouts_to_navbars" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"layout_id" uuid NOT NULL,
	"navbar_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_layouts_to_footers" ADD CONSTRAINT "sps_w_b_layouts_to_footers_layout_id_sps_w_b_layouts_id_fk" FOREIGN KEY ("layout_id") REFERENCES "sps_w_b_layouts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_layouts_to_footers" ADD CONSTRAINT "sps_w_b_layouts_to_footers_footer_id_sps_w_b_footers_id_fk" FOREIGN KEY ("footer_id") REFERENCES "sps_w_b_footers"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_layouts_to_navbars" ADD CONSTRAINT "sps_w_b_layouts_to_navbars_layout_id_sps_w_b_layouts_id_fk" FOREIGN KEY ("layout_id") REFERENCES "sps_w_b_layouts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_layouts_to_navbars" ADD CONSTRAINT "sps_w_b_layouts_to_navbars_navbar_id_sps_w_b_navbars_id_fk" FOREIGN KEY ("navbar_id") REFERENCES "sps_w_b_navbars"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
