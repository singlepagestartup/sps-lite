CREATE TABLE IF NOT EXISTS "sps_w_b_navbars" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"class_name" text,
	"title" text,
	"subtitle" text,
	"description" text,
	"uid" text
);
