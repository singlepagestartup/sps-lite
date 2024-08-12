ALTER TABLE "sps_ee_product" ADD COLUMN "title" text NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_ee_product" ADD COLUMN "description" text NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_ee_product" ADD COLUMN "short_description" text DEFAULT '';