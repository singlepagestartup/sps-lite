ALTER TABLE "sps_w_b_fs_sn_bs_to_fs" ADD COLUMN "order_index" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_fr_bs_to_bs_as_d3j" ADD COLUMN "order_index" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_fr_bs_to_ls_pbe" ADD COLUMN "order_index" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_fs_to_ws" ADD COLUMN "direction" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_fs_to_ws" ADD COLUMN "order_index" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ho_sn_bs_to_bs_as_pmd" ADD COLUMN "order_index" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ho_sn_bs_to_fs_y4o" ADD COLUMN "order_index" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ls_to_fs" ADD COLUMN "order_index" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ls_to_fs" ADD COLUMN "direction" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_nr_bs_to_bs_as_njg" ADD COLUMN "order_index" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_ss_to_ss" ADD COLUMN "order_index" integer DEFAULT 0 NOT NULL;