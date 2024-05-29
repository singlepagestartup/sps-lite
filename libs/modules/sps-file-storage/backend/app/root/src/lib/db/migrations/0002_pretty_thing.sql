ALTER TABLE "sps_f_s_ws_to_fs_ocw" ADD COLUMN "variant" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_f_s_ws_to_fs_ocw" ADD COLUMN "order_index" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_f_s_ws_to_fs_ocw" ADD COLUMN "class_name" text;