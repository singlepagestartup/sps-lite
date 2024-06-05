CREATE TABLE IF NOT EXISTS "sps_r_user" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"status" text DEFAULT 'not_verified' NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL
);
