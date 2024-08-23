ALTER TABLE "sps_ee_order" ALTER COLUMN "variant" SET DEFAULT 'default';--> statement-breakpoint
ALTER TABLE "sps_ee_order" ADD COLUMN "status" text DEFAULT 'new' NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_ee_order" ADD COLUMN "type" text DEFAULT 'cart' NOT NULL;