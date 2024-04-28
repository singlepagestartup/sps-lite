CREATE TABLE IF NOT EXISTS "pages" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
