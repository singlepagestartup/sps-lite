CREATE TABLE IF NOT EXISTS "sps_w_b_sr_bk" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text,
	"subtitle" text,
	"description" text,
	"anchor" text,
	"class_name" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL
);
