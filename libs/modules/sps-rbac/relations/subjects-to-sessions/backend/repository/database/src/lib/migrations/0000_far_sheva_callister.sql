CREATE TABLE IF NOT EXISTS "sps_r_ss_to_ss_1eh" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"class_name" text,
	"st_id" uuid NOT NULL,
	"sn_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_r_ss_to_ss_1eh" ADD CONSTRAINT "sps_r_ss_to_ss_1eh_st_id_sps_r_subject_id_fk" FOREIGN KEY ("st_id") REFERENCES "public"."sps_r_subject"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_r_ss_to_ss_1eh" ADD CONSTRAINT "sps_r_ss_to_ss_1eh_sn_id_sps_r_session_id_fk" FOREIGN KEY ("sn_id") REFERENCES "public"."sps_r_session"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
