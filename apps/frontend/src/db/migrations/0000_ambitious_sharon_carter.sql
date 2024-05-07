DO $$ BEGIN
 CREATE TYPE "sps_w_b_pages_variant" AS ENUM('default');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_pages" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text DEFAULT 'Page' NOT NULL,
	"url" text DEFAULT '/' NOT NULL,
	"description" text DEFAULT 'Description',
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" "sps_w_b_pages_variant" DEFAULT 'default' NOT NULL,
	CONSTRAINT "sps_w_b_pages_url_unique" UNIQUE("url")
);
