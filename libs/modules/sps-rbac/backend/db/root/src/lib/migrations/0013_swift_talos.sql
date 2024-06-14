CREATE TABLE IF NOT EXISTS "sps_r_subject" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_r_ss_to_is_h58" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"class_name" text,
	"st_id" uuid NOT NULL,
	"iy_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_r_ss_to_rs_3nw" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"class_name" text,
	"st_id" uuid NOT NULL,
	"re_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_r_ss_to_ss_1eh" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"class_name" text,
	"st_id" uuid NOT NULL,
	"sn_id" uuid NOT NULL
);
--> statement-breakpoint
DROP TABLE "sps_r_us_to_is_a7k";--> statement-breakpoint
DROP TABLE "sps_r_us_to_rs_37t";--> statement-breakpoint
DROP TABLE "sps_r_us_to_ss_0y5";--> statement-breakpoint
DROP TABLE "sps_r_user";--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_r_ss_to_is_h58" ADD CONSTRAINT "sps_r_ss_to_is_h58_st_id_sps_r_subject_id_fk" FOREIGN KEY ("st_id") REFERENCES "public"."sps_r_subject"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_r_ss_to_is_h58" ADD CONSTRAINT "sps_r_ss_to_is_h58_iy_id_sps_r_identity_id_fk" FOREIGN KEY ("iy_id") REFERENCES "public"."sps_r_identity"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_r_ss_to_rs_3nw" ADD CONSTRAINT "sps_r_ss_to_rs_3nw_st_id_sps_r_subject_id_fk" FOREIGN KEY ("st_id") REFERENCES "public"."sps_r_subject"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_r_ss_to_rs_3nw" ADD CONSTRAINT "sps_r_ss_to_rs_3nw_re_id_sps_r_role_id_fk" FOREIGN KEY ("re_id") REFERENCES "public"."sps_r_role"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_r_ss_to_ss_1eh" ADD CONSTRAINT "sps_r_ss_to_ss_1eh_st_id_sps_r_subject_id_fk" FOREIGN KEY ("st_id") REFERENCES "public"."sps_r_subject"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_r_ss_to_ss_1eh" ADD CONSTRAINT "sps_r_ss_to_ss_1eh_sn_id_sps_r_session_id_fk" FOREIGN KEY ("sn_id") REFERENCES "public"."sps_r_session"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
