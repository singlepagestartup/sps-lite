DO $$ BEGIN
 CREATE TYPE "sps_w_b_footers_variant" AS ENUM('default');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "sps_w_b_navbars_variant" AS ENUM('default');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_footers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" "sps_w_b_footers_variant" DEFAULT 'default' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_navbars" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" "sps_w_b_navbars_variant" DEFAULT 'default' NOT NULL
);
