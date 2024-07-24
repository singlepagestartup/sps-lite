CREATE TABLE IF NOT EXISTS "sps_w_b_bs_ay_8m3" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"title" text,
	"class_name" text,
	"description" text
);
