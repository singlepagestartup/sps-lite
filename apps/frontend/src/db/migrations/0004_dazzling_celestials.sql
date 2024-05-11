CREATE TABLE IF NOT EXISTS "sps_w_b_widgets_to_hero_section_blocks" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"widget_id" uuid NOT NULL,
	"hero_section_block_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_widgets_to_hero_section_blocks" ADD CONSTRAINT "sps_w_b_widgets_to_hero_section_blocks_widget_id_sps_w_b_widgets_id_fk" FOREIGN KEY ("widget_id") REFERENCES "sps_w_b_widgets"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sps_w_b_widgets_to_hero_section_blocks" ADD CONSTRAINT "sps_w_b_widgets_to_hero_section_blocks_hero_section_block_id_sps_w_b_hero_section_blocks_id_fk" FOREIGN KEY ("hero_section_block_id") REFERENCES "sps_w_b_hero_section_blocks"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
