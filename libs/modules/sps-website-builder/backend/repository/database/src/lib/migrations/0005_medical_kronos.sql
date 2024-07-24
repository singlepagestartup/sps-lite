ALTER TABLE "sps_w_b_fs_sn_bs_to_fs" ADD COLUMN IF NOT EXISTS "direction" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_w_b_feature" ADD COLUMN IF NOT EXISTS "class_name" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_feature" ADD COLUMN IF NOT EXISTS "description" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_feature" ADD COLUMN IF NOT EXISTS "subtitle" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_feature" ADD COLUMN IF NOT EXISTS "title" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_fs_sn_bk" ADD COLUMN IF NOT EXISTS "class_name" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_fs_sn_bk" ADD COLUMN IF NOT EXISTS "anchor" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_fs_sn_bk" ADD COLUMN IF NOT EXISTS "description" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_fs_sn_bk" ADD COLUMN IF NOT EXISTS "subtitle" text;--> statement-breakpoint
ALTER TABLE "sps_w_b_fs_sn_bk" ADD COLUMN IF NOT EXISTS "title" text;