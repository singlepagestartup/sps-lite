CREATE TABLE IF NOT EXISTS "sps_w_b_fs_sn_bs_to_fs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"fk_id" uuid NOT NULL,
	"fe_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_fs_sn_bs_to_fs" ADD CONSTRAINT "sps_w_b_fs_sn_bs_to_fs_fk_id_sps_w_b_fs_sn_bk_id_fk" FOREIGN KEY ("fk_id") REFERENCES "sps_w_b_fs_sn_bk"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_fs_sn_bs_to_fs" ADD CONSTRAINT "sps_w_b_fs_sn_bs_to_fs_fe_id_sps_w_b_feature_id_fk" FOREIGN KEY ("fe_id") REFERENCES "sps_w_b_feature"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
