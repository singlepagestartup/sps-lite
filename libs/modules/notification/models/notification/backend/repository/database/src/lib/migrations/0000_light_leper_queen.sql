CREATE TABLE IF NOT EXISTS "sps_nn_notification" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant" text DEFAULT 'default' NOT NULL,
	"status" text DEFAULT 'new' NOT NULL,
	"type" text DEFAULT 'email' NOT NULL,
	"title" text,
	"subtitle" text,
	"description" text,
	"content" text,
	"reciever" text NOT NULL
);
