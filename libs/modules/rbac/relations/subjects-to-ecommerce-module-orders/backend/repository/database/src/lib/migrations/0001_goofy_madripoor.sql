ALTER TABLE "sps_rc_ss_to_ee_me_os_oq2" DROP CONSTRAINT "sps_rc_ss_to_ee_me_os_oq2_ee_me_or_id_sps_ee_order_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_rc_ss_to_ee_me_os_oq2" ADD CONSTRAINT "sps_rc_ss_to_ee_me_os_oq2_ee_me_or_id_sps_ee_order_id_fk" FOREIGN KEY ("ee_me_or_id") REFERENCES "public"."sps_ee_order"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
