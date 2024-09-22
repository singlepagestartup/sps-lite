ALTER TABLE "sps_blog_article" ADD COLUMN "slug" text;--> statement-breakpoint
ALTER TABLE "sps_blog_article" ADD CONSTRAINT "sps_blog_article_slug_unique" UNIQUE("slug");