DO $$ BEGIN
 CREATE TYPE "sps_w_b_slide_variant" AS ENUM('default');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "sps_w_b_slider_variant" AS ENUM('default');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_slide" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" "sps_w_b_slide_variant" DEFAULT 'default' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_slider" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" "sps_w_b_slider_variant" DEFAULT 'default' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_sr_bs_to_ss" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"sk_id" uuid NOT NULL,
	"sr_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_ss_to_ss" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"sr_id" uuid NOT NULL,
	"se_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_sr_bs_to_ss" ADD CONSTRAINT "sps_w_b_sr_bs_to_ss_sk_id_sps_w_b_sr_bk_id_fk" FOREIGN KEY ("sk_id") REFERENCES "sps_w_b_sr_bk"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_sr_bs_to_ss" ADD CONSTRAINT "sps_w_b_sr_bs_to_ss_sr_id_sps_w_b_slider_id_fk" FOREIGN KEY ("sr_id") REFERENCES "sps_w_b_slider"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ss_to_ss" ADD CONSTRAINT "sps_w_b_ss_to_ss_sr_id_sps_w_b_slider_id_fk" FOREIGN KEY ("sr_id") REFERENCES "sps_w_b_slider"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ss_to_ss" ADD CONSTRAINT "sps_w_b_ss_to_ss_se_id_sps_w_b_slide_id_fk" FOREIGN KEY ("se_id") REFERENCES "sps_w_b_slide"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
