CREATE TABLE IF NOT EXISTS "sps_r_permission" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"type" text DEFAULT 'http' NOT NULL,
	"method" text DEFAULT 'GET' NOT NULL,
	"path" text DEFAULT '/' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_r_rs_to_ps_xbk" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"class_name" text,
	"re_id" uuid NOT NULL,
	"pn_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_r_rs_to_ps_xbk" ADD CONSTRAINT "sps_r_rs_to_ps_xbk_re_id_sps_r_role_id_fk" FOREIGN KEY ("re_id") REFERENCES "public"."sps_r_role"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_r_rs_to_ps_xbk" ADD CONSTRAINT "sps_r_rs_to_ps_xbk_pn_id_sps_r_permission_id_fk" FOREIGN KEY ("pn_id") REFERENCES "public"."sps_r_permission"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
