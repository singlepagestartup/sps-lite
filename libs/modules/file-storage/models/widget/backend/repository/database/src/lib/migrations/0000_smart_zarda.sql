CREATE TABLE IF NOT EXISTS "sps_f_s_widget" (
	"variant" text DEFAULT 'default',
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"title" text
);
