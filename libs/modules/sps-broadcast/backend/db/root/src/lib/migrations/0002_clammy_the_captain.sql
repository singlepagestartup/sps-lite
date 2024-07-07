CREATE TABLE IF NOT EXISTS "sps_b_cs_to_ms_34z" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"class_name" text,
	"cl_id" uuid NOT NULL,
	"me_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_b_cs_to_ms_34z" ADD CONSTRAINT "sps_b_cs_to_ms_34z_cl_id_sps_b_channel_id_fk" FOREIGN KEY ("cl_id") REFERENCES "public"."sps_b_channel"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_b_cs_to_ms_34z" ADD CONSTRAINT "sps_b_cs_to_ms_34z_me_id_sps_b_message_id_fk" FOREIGN KEY ("me_id") REFERENCES "public"."sps_b_message"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
