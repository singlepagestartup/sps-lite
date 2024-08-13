CREATE TABLE IF NOT EXISTS "sps_rc_ss_to_ee_os_ov2" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"class_name" text,
	"st_id" uuid NOT NULL,
	"ee_or_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_rc_ss_to_ee_os_ov2" ADD CONSTRAINT "sps_rc_ss_to_ee_os_ov2_st_id_sps_rc_subject_id_fk" FOREIGN KEY ("st_id") REFERENCES "public"."sps_rc_subject"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_rc_ss_to_ee_os_ov2" ADD CONSTRAINT "sps_rc_ss_to_ee_os_ov2_ee_or_id_sps_ee_order_id_fk" FOREIGN KEY ("ee_or_id") REFERENCES "public"."sps_ee_order"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
