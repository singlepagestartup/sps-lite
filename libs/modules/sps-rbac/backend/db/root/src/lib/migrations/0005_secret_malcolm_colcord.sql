ALTER TABLE "sps_r_role" ADD COLUMN "title" text NOT NULL;--> statement-breakpoint
ALTER TABLE "sps_r_role" ADD CONSTRAINT "sps_r_role_title_unique" UNIQUE("title");