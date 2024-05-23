CREATE TABLE IF NOT EXISTS "sps_w_b_fr_bs_to_ls_pbe" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"direction" text DEFAULT 'default' NOT NULL,
	"fk_id" uuid NOT NULL,
	"le_id" uuid NOT NULL
);
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
