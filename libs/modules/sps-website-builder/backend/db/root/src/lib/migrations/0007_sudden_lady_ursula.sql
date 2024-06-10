ALTER TABLE "sps_w_b_bs_as_to_bs_i0l" ADD COLUMN "variant" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_fs_sn_bs_to_fs" ADD COLUMN "variant" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_fr_bs_to_bs_as_d3j" ADD COLUMN "variant" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_fr_bs_to_ls_pbe" ADD COLUMN "variant" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_fr_bs_to_ls_pbe" ADD COLUMN "class_name" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_fs_to_ws" ADD COLUMN "variant" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_fs_to_ws" ADD COLUMN "class_name" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_ho_sn_bs_to_bs_as_pmd" ADD COLUMN "variant" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ho_sn_bs_to_bs_as_pmd" ADD COLUMN "class_name" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_ho_sn_bs_to_fs_y4o" ADD COLUMN "class_name" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_ls_to_fs" ADD COLUMN "variant" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ls_to_fs" ADD COLUMN "class_name" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_ls_to_ns" ADD COLUMN "variant" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ls_to_ns" ADD COLUMN "order_index" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ls_to_ns" ADD COLUMN "class_name" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_nr_bs_to_bs_as_njg" ADD COLUMN "variant" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_nr_bs_to_ls" ADD COLUMN "variant" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_nr_bs_to_ls" ADD COLUMN "order_index" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_nr_bs_to_ls" ADD COLUMN "class_name" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_ns_to_ws" ADD COLUMN "variant" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ns_to_ws" ADD COLUMN "order_index" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ns_to_ws" ADD COLUMN "class_name" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_ps_to_ls" ADD COLUMN "variant" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ps_to_ls" ADD COLUMN "order_index" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ps_to_ls" ADD COLUMN "class_name" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_ps_to_ws" ADD COLUMN "variant" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ps_to_ws" ADD COLUMN "class_name" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_sr_bs_to_ss" ADD COLUMN "variant" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_sr_bs_to_ss" ADD COLUMN "order_index" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_sr_bs_to_ss" ADD COLUMN "class_name" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_ss_to_ss" ADD COLUMN "variant" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ss_to_ss" ADD COLUMN "class_name" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_ws_to_fs_sn_bs" ADD COLUMN "variant" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ws_to_fs_sn_bs" ADD COLUMN "order_index" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ws_to_fs_sn_bs" ADD COLUMN "class_name" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_ws_to_fr_bs" ADD COLUMN "variant" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ws_to_fr_bs" ADD COLUMN "order_index" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ws_to_fr_bs" ADD COLUMN "class_name" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_ws_to_ho_sn_bs" ADD COLUMN "variant" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ws_to_ho_sn_bs" ADD COLUMN "order_index" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ws_to_ho_sn_bs" ADD COLUMN "class_name" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_ws_to_ls_xth" ADD COLUMN "variant" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ws_to_ls_xth" ADD COLUMN "order_index" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ws_to_ls_xth" ADD COLUMN "class_name" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_ws_to_nr_bs" ADD COLUMN "variant" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ws_to_nr_bs" ADD COLUMN "order_index" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ws_to_nr_bs" ADD COLUMN "class_name" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_ws_to_sr_bs" ADD COLUMN "variant" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ws_to_sr_bs" ADD COLUMN "order_index" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ws_to_sr_bs" ADD COLUMN "class_name" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_ws_to_ss_3bx" ADD COLUMN "variant" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ws_to_ss_3bx" ADD COLUMN "order_index" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ws_to_ss_3bx" ADD COLUMN "class_name" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_ws_to_ss_fe_se_me_ws_zb8" ADD COLUMN "variant" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ws_to_ss_fe_se_me_ws_zb8" ADD COLUMN "order_index" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ws_to_ss_fe_se_me_ws_zb8" ADD COLUMN "class_name" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_ws_to_sp_me_ws_xy7" ADD COLUMN "variant" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ws_to_sp_me_ws_xy7" ADD COLUMN "order_index" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ws_to_sp_me_ws_xy7" ADD COLUMN "class_name" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_bs_as_to_bs_i0l" DROP COLUMN IF EXISTS "direction";--> statement-breakpoint
ALTER TABLE "sps_w_b_fs_sn_bs_to_fs" DROP COLUMN IF EXISTS "direction";--> statement-breakpoint
ALTER TABLE "sps_w_b_fr_bs_to_bs_as_d3j" DROP COLUMN IF EXISTS "direction";--> statement-breakpoint
ALTER TABLE "sps_w_b_fr_bs_to_ls_pbe" DROP COLUMN IF EXISTS "direction";--> statement-breakpoint
ALTER TABLE "sps_w_b_fs_to_ws" DROP COLUMN IF EXISTS "direction";--> statement-breakpoint
ALTER TABLE "sps_w_b_ho_sn_bs_to_bs_as_pmd" DROP COLUMN IF EXISTS "direction";--> statement-breakpoint
ALTER TABLE "sps_w_b_ls_to_fs" DROP COLUMN IF EXISTS "direction";--> statement-breakpoint
ALTER TABLE "sps_w_b_nr_bs_to_bs_as_njg" DROP COLUMN IF EXISTS "direction";--> statement-breakpoint
ALTER TABLE "sps_w_b_ws_to_ls_xth" DROP COLUMN IF EXISTS "direction";--> statement-breakpoint
ALTER TABLE "sps_w_b_ws_to_nr_bs" DROP COLUMN IF EXISTS "direction";--> statement-breakpoint
ALTER TABLE "sps_w_b_ws_to_ss_3bx" DROP COLUMN IF EXISTS "direction";