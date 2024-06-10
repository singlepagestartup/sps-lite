CREATE TABLE IF NOT EXISTS "sps_f_s_file" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"file" text NOT NULL,
	"container_class_name" text,
	"class_name" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_f_s_widget" (
	"variant" text DEFAULT 'default',
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"title" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sps_f_s_ws_to_fs_ocw" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"wt_id" uuid NOT NULL,
	"fe_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_f_s_ws_to_fs_ocw" ADD CONSTRAINT "sps_f_s_ws_to_fs_ocw_wt_id_sps_f_s_widget_id_fk" FOREIGN KEY ("wt_id") REFERENCES "public"."sps_f_s_widget"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_f_s_ws_to_fs_ocw" ADD CONSTRAINT "sps_f_s_ws_to_fs_ocw_fe_id_sps_f_s_file_id_fk" FOREIGN KEY ("fe_id") REFERENCES "public"."sps_f_s_file"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
