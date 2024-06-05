CREATE TABLE IF NOT EXISTS "sps_r_us_to_is_a7k" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"class_name" text,
	"ur_id" uuid NOT NULL,
	"iy_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_r_us_to_rs_37t" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"class_name" text,
	"ur_id" uuid NOT NULL,
	"re_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_r_us_to_is_a7k" ADD CONSTRAINT "sps_r_us_to_is_a7k_ur_id_sps_r_user_id_fk" FOREIGN KEY ("ur_id") REFERENCES "public"."sps_r_user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_r_us_to_is_a7k" ADD CONSTRAINT "sps_r_us_to_is_a7k_iy_id_sps_r_identity_id_fk" FOREIGN KEY ("iy_id") REFERENCES "public"."sps_r_identity"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_r_us_to_rs_37t" ADD CONSTRAINT "sps_r_us_to_rs_37t_ur_id_sps_r_user_id_fk" FOREIGN KEY ("ur_id") REFERENCES "public"."sps_r_user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_r_us_to_rs_37t" ADD CONSTRAINT "sps_r_us_to_rs_37t_re_id_sps_r_role_id_fk" FOREIGN KEY ("re_id") REFERENCES "public"."sps_r_role"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
