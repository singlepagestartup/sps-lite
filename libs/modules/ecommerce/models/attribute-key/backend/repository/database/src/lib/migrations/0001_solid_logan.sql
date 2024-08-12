ALTER TABLE "sps_ee_ae_ky" ADD COLUMN "type" text DEFAULT 'feature' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_ee_ae_ky" ADD COLUMN "title" text NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_ee_ae_ky" ADD COLUMN "slug" text NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_ee_ae_ky" ADD COLUMN "prefix" text;--> statement-breakpoint
ALTER TABLE "sps_ee_ae_ky" ADD COLUMN "suffix" text;