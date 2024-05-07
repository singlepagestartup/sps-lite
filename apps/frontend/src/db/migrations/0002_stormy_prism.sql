CREATE TABLE IF NOT EXISTS "sps_w_b_pages_to_layouts" (
	"page_id" uuid NOT NULL,
	"layout_id" uuid NOT NULL,
	CONSTRAINT "sps_w_b_pages_to_layouts_page_id_layout_id_pk" PRIMARY KEY("page_id","layout_id")
);
--> statement-breakpoint
ALTER TABLE "sps_w_b_layouts" ADD COLUMN "title" text;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_pages_to_layouts" ADD CONSTRAINT "sps_w_b_pages_to_layouts_page_id_sps_w_b_pages_id_fk" FOREIGN KEY ("page_id") REFERENCES "sps_w_b_pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_pages_to_layouts" ADD CONSTRAINT "sps_w_b_pages_to_layouts_layout_id_sps_w_b_layouts_id_fk" FOREIGN KEY ("layout_id") REFERENCES "sps_w_b_layouts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
