CREATE TABLE IF NOT EXISTS "sps_h_layout" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"title" text,
	"order_index" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_h_metadata" (
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
	"twitter_url" text,
	"twitter_domain" text,
	"twitter_app_country" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_h_page" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text DEFAULT 'Page' NOT NULL,
	"url" text DEFAULT '/' NOT NULL,
	"description" text DEFAULT 'Description',
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"order_index" integer,
	CONSTRAINT "sps_h_page_url_unique" UNIQUE("url")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_h_ps_to_ls_gxd" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"class_name" text,
	"pe_id" uuid NOT NULL,
	"lt_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_h_ps_to_ma_4m4" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"class_name" text,
	"pe_id" uuid NOT NULL,
	"ma_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_h_ps_to_ws_xyv" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"class_name" text,
	"pe_id" uuid NOT NULL,
	"wt_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_h_widget" (
	"title" text,
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"class_name" text,
	"order_index" integer
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_h_ps_to_ls_gxd" ADD CONSTRAINT "sps_h_ps_to_ls_gxd_pe_id_sps_h_page_id_fk" FOREIGN KEY ("pe_id") REFERENCES "public"."sps_h_page"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_h_ps_to_ls_gxd" ADD CONSTRAINT "sps_h_ps_to_ls_gxd_lt_id_sps_h_layout_id_fk" FOREIGN KEY ("lt_id") REFERENCES "public"."sps_h_layout"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_h_ps_to_ma_4m4" ADD CONSTRAINT "sps_h_ps_to_ma_4m4_pe_id_sps_h_page_id_fk" FOREIGN KEY ("pe_id") REFERENCES "public"."sps_h_page"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_h_ps_to_ma_4m4" ADD CONSTRAINT "sps_h_ps_to_ma_4m4_ma_id_sps_h_metadata_id_fk" FOREIGN KEY ("ma_id") REFERENCES "public"."sps_h_metadata"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_h_ps_to_ws_xyv" ADD CONSTRAINT "sps_h_ps_to_ws_xyv_pe_id_sps_h_page_id_fk" FOREIGN KEY ("pe_id") REFERENCES "public"."sps_h_page"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_h_ps_to_ws_xyv" ADD CONSTRAINT "sps_h_ps_to_ws_xyv_wt_id_sps_h_widget_id_fk" FOREIGN KEY ("wt_id") REFERENCES "public"."sps_h_widget"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
