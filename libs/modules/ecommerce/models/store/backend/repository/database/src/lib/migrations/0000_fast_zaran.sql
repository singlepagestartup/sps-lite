CREATE TABLE IF NOT EXISTS "sps_ee_store" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"short_description" text DEFAULT '',
	"slug" text NOT NULL,
	CONSTRAINT "sps_ee_store_slug_unique" UNIQUE("slug")
);
