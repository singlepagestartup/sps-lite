ALTER TABLE "sps_w_b_fs_sn_bs_to_fs" ADD COLUMN "direction" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_feature" ADD COLUMN "class_name" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_feature" ADD COLUMN "description" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_feature" ADD COLUMN "subtitle" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_feature" ADD COLUMN "title" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_fs_sn_bk" ADD COLUMN "class_name" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_fs_sn_bk" ADD COLUMN "anchor" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_fs_sn_bk" ADD COLUMN "description" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_fs_sn_bk" ADD COLUMN "subtitle" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_fs_sn_bk" ADD COLUMN "title" text;