CREATE TABLE IF NOT EXISTS "sps_t_p_tm_me_3ug" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"to" text,
	"from" text NOT NULL,
	"content" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "sps_t_p_telegram" ADD COLUMN "password" text NOT NULL;