CREATE TABLE IF NOT EXISTS "pages_to_layouts" (
	"page_id" integer NOT NULL,
	"layout_id" integer NOT NULL,
	CONSTRAINT "pages_to_layouts_page_id_layout_id_pk" PRIMARY KEY("page_id","layout_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "pages_to_layouts" ADD CONSTRAINT "pages_to_layouts_page_id_pages_id_fk" FOREIGN KEY ("page_id") REFERENCES "pages"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "pages_to_layouts" ADD CONSTRAINT "pages_to_layouts_layout_id_layouts_id_fk" FOREIGN KEY ("layout_id") REFERENCES "layouts"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
