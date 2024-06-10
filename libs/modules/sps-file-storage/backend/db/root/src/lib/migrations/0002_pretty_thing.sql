ALTER TABLE "sps_f_s_ws_to_fs_ocw" ADD COLUMN IF NOT EXISTS "variant" text DEFAULT 'default' NOT NULL;
ALTER TABLE "sps_f_s_ws_to_fs_ocw" ADD COLUMN IF NOT EXISTS "order_index" integer DEFAULT 0 NOT NULL;
ALTER TABLE "sps_f_s_ws_to_fs_ocw" ADD COLUMN IF NOT EXISTS "class_name" text;