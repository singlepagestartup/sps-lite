CREATE TABLE IF NOT EXISTS "sps_cm_rt_bk" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"class_name" text,
	"description" text,
	"subtitle" text,
	"title" text
);
