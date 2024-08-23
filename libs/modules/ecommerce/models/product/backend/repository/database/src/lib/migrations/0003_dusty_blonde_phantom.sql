ALTER TABLE "sps_ee_product" ADD COLUMN "sku" text NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_ee_product" ADD CONSTRAINT "sps_ee_product_sku_unique" UNIQUE("sku");