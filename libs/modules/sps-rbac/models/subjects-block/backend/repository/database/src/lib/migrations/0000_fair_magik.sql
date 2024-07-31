CREATE TABLE IF NOT EXISTS "sps_rc_ss_bk_ds2" (
	"class_name" text,
	"anchor" text,
	"description" text,
	"subtitle" text,
	"title" text,
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL
);
