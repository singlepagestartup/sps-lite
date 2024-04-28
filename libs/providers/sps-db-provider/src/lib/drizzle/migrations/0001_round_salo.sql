ALTER TABLE "layouts" ADD COLUMN "title" text DEFAULT 'Layout';--> statement-breakpoint
ALTER TABLE "layouts" ADD COLUMN "description" text DEFAULT 'Description';--> statement-breakpoint
ALTER TABLE "pages" ADD COLUMN "title" text DEFAULT 'Page';--> statement-breakpoint
ALTER TABLE "pages" ADD COLUMN "description" text DEFAULT 'Description';