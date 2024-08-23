ALTER TABLE "sps_ee_ae_ky" ALTER COLUMN "type" SET DEFAULT 'feature';--> statement-breakpoint
ALTER TABLE "sps_ee_ae_ky" ADD COLUMN "field" text DEFAULT 'string' NOT NULL;