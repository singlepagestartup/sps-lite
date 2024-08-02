CREATE TABLE IF NOT EXISTS "sps_rc_policy" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"type" text DEFAULT 'http' NOT NULL,
	"method" text DEFAULT 'GET' NOT NULL,
	"path" text DEFAULT '/' NOT NULL
);
