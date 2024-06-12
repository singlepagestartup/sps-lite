ALTER TABLE "sps_r_ss_to_as_sk6" RENAME TO "sps_r_ss_to_as_2il";--> statement-breakpoint
ALTER TABLE "sps_r_us_to_ss_r1o" RENAME TO "sps_r_us_to_ss_0y5";--> statement-breakpoint
ALTER TABLE "sps_r_ss_to_as_2il" DROP CONSTRAINT "sps_r_ss_to_as_sk6_sn_id_sps_r_session_id_fk";
--> statement-breakpoint
ALTER TABLE "sps_r_ss_to_as_2il" DROP CONSTRAINT "sps_r_ss_to_as_sk6_an_id_sps_r_an_hgl_id_fk";
--> statement-breakpoint
ALTER TABLE "sps_r_us_to_ss_0y5" DROP CONSTRAINT "sps_r_us_to_ss_r1o_ur_id_sps_r_user_id_fk";
--> statement-breakpoint
ALTER TABLE "sps_r_us_to_ss_0y5" DROP CONSTRAINT "sps_r_us_to_ss_r1o_sn_id_sps_r_session_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_r_ss_to_as_2il" ADD CONSTRAINT "sps_r_ss_to_as_2il_sn_id_sps_r_session_id_fk" FOREIGN KEY ("sn_id") REFERENCES "public"."sps_r_session"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_r_ss_to_as_2il" ADD CONSTRAINT "sps_r_ss_to_as_2il_an_id_sps_r_an_hgl_id_fk" FOREIGN KEY ("an_id") REFERENCES "public"."sps_r_an_hgl"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_r_us_to_ss_0y5" ADD CONSTRAINT "sps_r_us_to_ss_0y5_ur_id_sps_r_user_id_fk" FOREIGN KEY ("ur_id") REFERENCES "public"."sps_r_user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_r_us_to_ss_0y5" ADD CONSTRAINT "sps_r_us_to_ss_0y5_sn_id_sps_r_session_id_fk" FOREIGN KEY ("sn_id") REFERENCES "public"."sps_r_session"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
