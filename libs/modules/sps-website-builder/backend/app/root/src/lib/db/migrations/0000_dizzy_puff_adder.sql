CREATE TABLE IF NOT EXISTS "sps_w_b_button" (
	"title" text,
	"url" text,
	"class_name" text,
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_bs_ay_8m3" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"title" text,
	"class_name" text,
	"description" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_bs_as_to_bs_i0l" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"direction" text DEFAULT 'default' NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"by_id" uuid NOT NULL,
	"bn_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_fs_sn_bs_to_fs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"fk_id" uuid NOT NULL,
	"fe_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_feature" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_fs_sn_bk" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_footers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_fr_bk" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"class_name" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_fr_bs_to_bs_as_d3j" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"direction" text DEFAULT 'default' NOT NULL,
	"fk_id" uuid NOT NULL,
	"by_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_fr_bs_to_ls_pbe" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"direction" text DEFAULT 'default' NOT NULL,
	"fk_id" uuid NOT NULL,
	"le_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_fs_to_ws" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"fr_id" uuid NOT NULL,
	"wt_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_ho_sn_bs" (
	"title" text,
	"subtitle" text,
	"description" text,
	"anchor" text,
	"class_name" text,
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_ho_sn_bs_to_bs_as_pmd" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"direction" text DEFAULT 'default' NOT NULL,
	"hk_id" uuid NOT NULL,
	"by_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_ho_sn_bs_to_fs_y4o" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"hk_id" uuid NOT NULL,
	"fe_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_layouts" (
	"title" text,
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_ls_to_fs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"lt_id" uuid NOT NULL,
	"fr_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_ls_to_ns" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"lt_id" uuid NOT NULL,
	"nr_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_logotype" (
	"class_name" text,
	"url" text,
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_navbars" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"class_name" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_nr_bk" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_nr_bs_to_bs_as_njg" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"direction" text DEFAULT 'default' NOT NULL,
	"nk_id" uuid NOT NULL,
	"by_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_nr_bs_to_ls" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"nk_id" uuid NOT NULL,
	"le_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_ns_to_ws" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"nr_id" uuid NOT NULL,
	"wt_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_pages" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text DEFAULT 'Page' NOT NULL,
	"url" text DEFAULT '/' NOT NULL,
	"description" text DEFAULT 'Description',
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	CONSTRAINT "sps_w_b_pages_url_unique" UNIQUE("url")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_ps_to_ls" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"pe_id" uuid NOT NULL,
	"lt_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_ps_to_ws" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"pe_id" uuid NOT NULL,
	"wt_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_slide" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"title" text,
	"subtitle" text,
	"description" text,
	"class_name" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_slider" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"title" text,
	"class_name" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_sr_bk" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text,
	"subtitle" text,
	"description" text,
	"anchor" text,
	"class_name" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL
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
CREATE TABLE IF NOT EXISTS "sps_w_b_ws_to_fs_sn_bs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"wt_id" uuid NOT NULL,
	"fk_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_widgets" (
	"title" text,
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_ws_to_fr_bs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"wt_id" uuid NOT NULL,
	"fk_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_ws_to_ho_sn_bs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"wt_id" uuid NOT NULL,
	"ho_sn_bk_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_ws_to_ls_xth" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"direction" text DEFAULT 'default' NOT NULL,
	"wt_id" uuid NOT NULL,
	"le_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_ws_to_nr_bs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"direction" text DEFAULT 'default' NOT NULL,
	"wt_id" uuid NOT NULL,
	"nk_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_ws_to_sr_bs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"wt_id" uuid NOT NULL,
	"sk_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_ws_to_ss_3bx" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"direction" text DEFAULT 'default' NOT NULL,
	"wt_id" uuid NOT NULL,
	"se_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_ws_to_ss_fe_se_me_ws_zb8" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"wt_id" uuid NOT NULL,
	"sps_fe_se_me_wt_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_w_b_ws_to_sp_me_ws_xy7" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"wt_id" uuid NOT NULL,
	"st_me_wt_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_bs_as_to_bs_i0l" ADD CONSTRAINT "sps_w_b_bs_as_to_bs_i0l_by_id_sps_w_b_bs_ay_8m3_id_fk" FOREIGN KEY ("by_id") REFERENCES "public"."sps_w_b_bs_ay_8m3"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_bs_as_to_bs_i0l" ADD CONSTRAINT "sps_w_b_bs_as_to_bs_i0l_bn_id_sps_w_b_button_id_fk" FOREIGN KEY ("bn_id") REFERENCES "public"."sps_w_b_button"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_fs_sn_bs_to_fs" ADD CONSTRAINT "sps_w_b_fs_sn_bs_to_fs_fk_id_sps_w_b_fs_sn_bk_id_fk" FOREIGN KEY ("fk_id") REFERENCES "public"."sps_w_b_fs_sn_bk"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_fs_sn_bs_to_fs" ADD CONSTRAINT "sps_w_b_fs_sn_bs_to_fs_fe_id_sps_w_b_feature_id_fk" FOREIGN KEY ("fe_id") REFERENCES "public"."sps_w_b_feature"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_fr_bs_to_bs_as_d3j" ADD CONSTRAINT "sps_w_b_fr_bs_to_bs_as_d3j_fk_id_sps_w_b_fr_bk_id_fk" FOREIGN KEY ("fk_id") REFERENCES "public"."sps_w_b_fr_bk"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_fr_bs_to_bs_as_d3j" ADD CONSTRAINT "sps_w_b_fr_bs_to_bs_as_d3j_by_id_sps_w_b_bs_ay_8m3_id_fk" FOREIGN KEY ("by_id") REFERENCES "public"."sps_w_b_bs_ay_8m3"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_fr_bs_to_ls_pbe" ADD CONSTRAINT "sps_w_b_fr_bs_to_ls_pbe_fk_id_sps_w_b_fr_bk_id_fk" FOREIGN KEY ("fk_id") REFERENCES "public"."sps_w_b_fr_bk"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_fr_bs_to_ls_pbe" ADD CONSTRAINT "sps_w_b_fr_bs_to_ls_pbe_le_id_sps_w_b_logotype_id_fk" FOREIGN KEY ("le_id") REFERENCES "public"."sps_w_b_logotype"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_fs_to_ws" ADD CONSTRAINT "sps_w_b_fs_to_ws_fr_id_sps_w_b_footers_id_fk" FOREIGN KEY ("fr_id") REFERENCES "public"."sps_w_b_footers"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_fs_to_ws" ADD CONSTRAINT "sps_w_b_fs_to_ws_wt_id_sps_w_b_widgets_id_fk" FOREIGN KEY ("wt_id") REFERENCES "public"."sps_w_b_widgets"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ho_sn_bs_to_bs_as_pmd" ADD CONSTRAINT "sps_w_b_ho_sn_bs_to_bs_as_pmd_hk_id_sps_w_b_ho_sn_bs_id_fk" FOREIGN KEY ("hk_id") REFERENCES "public"."sps_w_b_ho_sn_bs"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ho_sn_bs_to_bs_as_pmd" ADD CONSTRAINT "sps_w_b_ho_sn_bs_to_bs_as_pmd_by_id_sps_w_b_bs_ay_8m3_id_fk" FOREIGN KEY ("by_id") REFERENCES "public"."sps_w_b_bs_ay_8m3"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ho_sn_bs_to_fs_y4o" ADD CONSTRAINT "sps_w_b_ho_sn_bs_to_fs_y4o_hk_id_sps_w_b_ho_sn_bs_id_fk" FOREIGN KEY ("hk_id") REFERENCES "public"."sps_w_b_ho_sn_bs"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ls_to_fs" ADD CONSTRAINT "sps_w_b_ls_to_fs_lt_id_sps_w_b_layouts_id_fk" FOREIGN KEY ("lt_id") REFERENCES "public"."sps_w_b_layouts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ls_to_fs" ADD CONSTRAINT "sps_w_b_ls_to_fs_fr_id_sps_w_b_footers_id_fk" FOREIGN KEY ("fr_id") REFERENCES "public"."sps_w_b_footers"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ls_to_ns" ADD CONSTRAINT "sps_w_b_ls_to_ns_lt_id_sps_w_b_layouts_id_fk" FOREIGN KEY ("lt_id") REFERENCES "public"."sps_w_b_layouts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ls_to_ns" ADD CONSTRAINT "sps_w_b_ls_to_ns_nr_id_sps_w_b_navbars_id_fk" FOREIGN KEY ("nr_id") REFERENCES "public"."sps_w_b_navbars"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_nr_bs_to_bs_as_njg" ADD CONSTRAINT "sps_w_b_nr_bs_to_bs_as_njg_nk_id_sps_w_b_nr_bk_id_fk" FOREIGN KEY ("nk_id") REFERENCES "public"."sps_w_b_nr_bk"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_nr_bs_to_bs_as_njg" ADD CONSTRAINT "sps_w_b_nr_bs_to_bs_as_njg_by_id_sps_w_b_bs_ay_8m3_id_fk" FOREIGN KEY ("by_id") REFERENCES "public"."sps_w_b_bs_ay_8m3"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_nr_bs_to_ls" ADD CONSTRAINT "sps_w_b_nr_bs_to_ls_nk_id_sps_w_b_nr_bk_id_fk" FOREIGN KEY ("nk_id") REFERENCES "public"."sps_w_b_nr_bk"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_nr_bs_to_ls" ADD CONSTRAINT "sps_w_b_nr_bs_to_ls_le_id_sps_w_b_logotype_id_fk" FOREIGN KEY ("le_id") REFERENCES "public"."sps_w_b_logotype"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ns_to_ws" ADD CONSTRAINT "sps_w_b_ns_to_ws_nr_id_sps_w_b_navbars_id_fk" FOREIGN KEY ("nr_id") REFERENCES "public"."sps_w_b_navbars"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ns_to_ws" ADD CONSTRAINT "sps_w_b_ns_to_ws_wt_id_sps_w_b_widgets_id_fk" FOREIGN KEY ("wt_id") REFERENCES "public"."sps_w_b_widgets"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ps_to_ls" ADD CONSTRAINT "sps_w_b_ps_to_ls_pe_id_sps_w_b_pages_id_fk" FOREIGN KEY ("pe_id") REFERENCES "public"."sps_w_b_pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ps_to_ls" ADD CONSTRAINT "sps_w_b_ps_to_ls_lt_id_sps_w_b_layouts_id_fk" FOREIGN KEY ("lt_id") REFERENCES "public"."sps_w_b_layouts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ps_to_ws" ADD CONSTRAINT "sps_w_b_ps_to_ws_pe_id_sps_w_b_pages_id_fk" FOREIGN KEY ("pe_id") REFERENCES "public"."sps_w_b_pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ps_to_ws" ADD CONSTRAINT "sps_w_b_ps_to_ws_wt_id_sps_w_b_widgets_id_fk" FOREIGN KEY ("wt_id") REFERENCES "public"."sps_w_b_widgets"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_sr_bs_to_ss" ADD CONSTRAINT "sps_w_b_sr_bs_to_ss_sk_id_sps_w_b_sr_bk_id_fk" FOREIGN KEY ("sk_id") REFERENCES "public"."sps_w_b_sr_bk"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_sr_bs_to_ss" ADD CONSTRAINT "sps_w_b_sr_bs_to_ss_sr_id_sps_w_b_slider_id_fk" FOREIGN KEY ("sr_id") REFERENCES "public"."sps_w_b_slider"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ss_to_ss" ADD CONSTRAINT "sps_w_b_ss_to_ss_sr_id_sps_w_b_slider_id_fk" FOREIGN KEY ("sr_id") REFERENCES "public"."sps_w_b_slider"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ss_to_ss" ADD CONSTRAINT "sps_w_b_ss_to_ss_se_id_sps_w_b_slide_id_fk" FOREIGN KEY ("se_id") REFERENCES "public"."sps_w_b_slide"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ws_to_fs_sn_bs" ADD CONSTRAINT "sps_w_b_ws_to_fs_sn_bs_wt_id_sps_w_b_widgets_id_fk" FOREIGN KEY ("wt_id") REFERENCES "public"."sps_w_b_widgets"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ws_to_fs_sn_bs" ADD CONSTRAINT "sps_w_b_ws_to_fs_sn_bs_fk_id_sps_w_b_fs_sn_bk_id_fk" FOREIGN KEY ("fk_id") REFERENCES "public"."sps_w_b_fs_sn_bk"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ws_to_fr_bs" ADD CONSTRAINT "sps_w_b_ws_to_fr_bs_wt_id_sps_w_b_widgets_id_fk" FOREIGN KEY ("wt_id") REFERENCES "public"."sps_w_b_widgets"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ws_to_fr_bs" ADD CONSTRAINT "sps_w_b_ws_to_fr_bs_fk_id_sps_w_b_fr_bk_id_fk" FOREIGN KEY ("fk_id") REFERENCES "public"."sps_w_b_fr_bk"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ws_to_ho_sn_bs" ADD CONSTRAINT "sps_w_b_ws_to_ho_sn_bs_wt_id_sps_w_b_widgets_id_fk" FOREIGN KEY ("wt_id") REFERENCES "public"."sps_w_b_widgets"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ws_to_ho_sn_bs" ADD CONSTRAINT "sps_w_b_ws_to_ho_sn_bs_ho_sn_bk_id_sps_w_b_ho_sn_bs_id_fk" FOREIGN KEY ("ho_sn_bk_id") REFERENCES "public"."sps_w_b_ho_sn_bs"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ws_to_ls_xth" ADD CONSTRAINT "sps_w_b_ws_to_ls_xth_wt_id_sps_w_b_widgets_id_fk" FOREIGN KEY ("wt_id") REFERENCES "public"."sps_w_b_widgets"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ws_to_ls_xth" ADD CONSTRAINT "sps_w_b_ws_to_ls_xth_le_id_sps_w_b_logotype_id_fk" FOREIGN KEY ("le_id") REFERENCES "public"."sps_w_b_logotype"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ws_to_nr_bs" ADD CONSTRAINT "sps_w_b_ws_to_nr_bs_wt_id_sps_w_b_widgets_id_fk" FOREIGN KEY ("wt_id") REFERENCES "public"."sps_w_b_widgets"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ws_to_nr_bs" ADD CONSTRAINT "sps_w_b_ws_to_nr_bs_nk_id_sps_w_b_nr_bk_id_fk" FOREIGN KEY ("nk_id") REFERENCES "public"."sps_w_b_nr_bk"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ws_to_sr_bs" ADD CONSTRAINT "sps_w_b_ws_to_sr_bs_wt_id_sps_w_b_widgets_id_fk" FOREIGN KEY ("wt_id") REFERENCES "public"."sps_w_b_widgets"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ws_to_sr_bs" ADD CONSTRAINT "sps_w_b_ws_to_sr_bs_sk_id_sps_w_b_sr_bk_id_fk" FOREIGN KEY ("sk_id") REFERENCES "public"."sps_w_b_sr_bk"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ws_to_ss_3bx" ADD CONSTRAINT "sps_w_b_ws_to_ss_3bx_wt_id_sps_w_b_widgets_id_fk" FOREIGN KEY ("wt_id") REFERENCES "public"."sps_w_b_widgets"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ws_to_ss_3bx" ADD CONSTRAINT "sps_w_b_ws_to_ss_3bx_se_id_sps_w_b_slide_id_fk" FOREIGN KEY ("se_id") REFERENCES "public"."sps_w_b_slide"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ws_to_ss_fe_se_me_ws_zb8" ADD CONSTRAINT "sps_w_b_ws_to_ss_fe_se_me_ws_zb8_wt_id_sps_w_b_widgets_id_fk" FOREIGN KEY ("wt_id") REFERENCES "public"."sps_w_b_widgets"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ws_to_sp_me_ws_xy7" ADD CONSTRAINT "sps_w_b_ws_to_sp_me_ws_xy7_wt_id_sps_w_b_widgets_id_fk" FOREIGN KEY ("wt_id") REFERENCES "public"."sps_w_b_widgets"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
