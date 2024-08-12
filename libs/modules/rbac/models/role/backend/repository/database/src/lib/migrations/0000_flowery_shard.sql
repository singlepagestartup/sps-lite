CREATE TABLE IF NOT EXISTS "sps_rc_role" (
	"title" text NOT NULL,
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	CONSTRAINT "sps_rc_role_title_unique" UNIQUE("title")
);
