CREATE TABLE IF NOT EXISTS "sps_n_nn_tbr" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"type" text DEFAULT 'info' NOT NULL,
	"title" text,
	"subtitle" text,
	"description" text
);
