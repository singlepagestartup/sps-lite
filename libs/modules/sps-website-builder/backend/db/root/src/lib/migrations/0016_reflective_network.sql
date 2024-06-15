CREATE TABLE IF NOT EXISTS "sps_w_b_metadata" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"title" text,
	"description" text,
	"keywords" text,
	"author" text,
	"viewport" text,
	"opengraph_title" text,
	"opengraph_description" text,
	"opengraph_url" text,
	"opengraph_type" text,
	"opengraph_site_name" text,
	"opengraph_locale" text,
	"twitter_card" text,
	"twitter_site" text,
	"twitter_creator" text,
	"twitter_title" text,
	"twitter_description" text,
	"twitter_image" text,
	"twitter_url" text,
	"twitter_domain" text,
	"twitter_app_country" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_ma_to_ss_fe_se_me_fs_8k7" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"class_name" text,
	"type" text DEFAULT 'opengraph_image',
	"ma_id" uuid NOT NULL,
	"sps_fe_se_me_fe_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_ps_to_ma_k31" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"class_name" text,
	"pe_id" uuid NOT NULL,
	"ma_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ma_to_ss_fe_se_me_fs_8k7" ADD CONSTRAINT "sps_w_b_ma_to_ss_fe_se_me_fs_8k7_ma_id_sps_w_b_metadata_id_fk" FOREIGN KEY ("ma_id") REFERENCES "public"."sps_w_b_metadata"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ps_to_ma_k31" ADD CONSTRAINT "sps_w_b_ps_to_ma_k31_pe_id_sps_w_b_pages_id_fk" FOREIGN KEY ("pe_id") REFERENCES "public"."sps_w_b_pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ps_to_ma_k31" ADD CONSTRAINT "sps_w_b_ps_to_ma_k31_ma_id_sps_w_b_metadata_id_fk" FOREIGN KEY ("ma_id") REFERENCES "public"."sps_w_b_metadata"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
