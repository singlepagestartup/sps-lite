CREATE TABLE IF NOT EXISTS "sps_w_b_slides_to_pages" (
	"slide_id" uuid NOT NULL,
	"page_id" uuid NOT NULL,
	CONSTRAINT "sps_w_b_slides_to_pages_slide_id_page_id_pk" PRIMARY KEY("slide_id","page_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_slides_to_pages" ADD CONSTRAINT "sps_w_b_slides_to_pages_slide_id_sps_w_b_slides_id_fk" FOREIGN KEY ("slide_id") REFERENCES "sps_w_b_slides"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_slides_to_pages" ADD CONSTRAINT "sps_w_b_slides_to_pages_page_id_sps_w_b_pages_id_fk" FOREIGN KEY ("page_id") REFERENCES "sps_w_b_pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
