CREATE TABLE IF NOT EXISTS "sps_r_session" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"expires_at" timestamp NOT NULL,
	"options" text DEFAULT '{}' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_r_us_to_ss_r1o" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"class_name" text,
	"ur_id" uuid NOT NULL,
	"sn_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_r_us_to_ss_r1o" ADD CONSTRAINT "sps_r_us_to_ss_r1o_ur_id_sps_r_user_id_fk" FOREIGN KEY ("ur_id") REFERENCES "public"."sps_r_user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_r_us_to_ss_r1o" ADD CONSTRAINT "sps_r_us_to_ss_r1o_sn_id_sps_r_session_id_fk" FOREIGN KEY ("sn_id") REFERENCES "public"."sps_r_session"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
