ALTER TABLE "sps_r_identity" ADD COLUMN "password" text;--> statement-breakpoint
ALTER TABLE "sps_r_identity" ADD COLUMN "account" text;--> statement-breakpoint
ALTER TABLE "sps_r_identity" ADD COLUMN "email" text;--> statement-breakpoint
ALTER TABLE "sps_r_identity" ADD COLUMN "provider" text DEFAULT 'login_and_password' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_r_identity" ADD CONSTRAINT "sps_r_identity_provider_account_email_unique" UNIQUE("provider","account","email");--> statement-breakpoint
ALTER TABLE "sps_r_us_to_is_a7k" ADD CONSTRAINT "sps_r_us_to_is_a7k_ur_id_iy_id_unique" UNIQUE("ur_id","iy_id");--> statement-breakpoint
ALTER TABLE "sps_r_us_to_rs_37t" ADD CONSTRAINT "sps_r_us_to_rs_37t_ur_id_re_id_unique" UNIQUE("ur_id","re_id");