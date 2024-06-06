CREATE TABLE IF NOT EXISTS "sps_w_b_ss_to_bs_as_mot" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"class_name" text,
	"se_id" uuid NOT NULL,
	"by_id" uuid NOT NULL
);
--> statement-breakpoint
ALTER TABLE "sps_w_b_bs_as_to_bs_i0l" ADD COLUMN "class_name" text;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ss_to_bs_as_mot" ADD CONSTRAINT "sps_w_b_ss_to_bs_as_mot_se_id_sps_w_b_slide_id_fk" FOREIGN KEY ("se_id") REFERENCES "public"."sps_w_b_slide"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_ss_to_bs_as_mot" ADD CONSTRAINT "sps_w_b_ss_to_bs_as_mot_by_id_sps_w_b_bs_ay_8m3_id_fk" FOREIGN KEY ("by_id") REFERENCES "public"."sps_w_b_bs_ay_8m3"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
