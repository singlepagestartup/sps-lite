CREATE TABLE IF NOT EXISTS "sps_w_b_fs_sn_bk" (
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
