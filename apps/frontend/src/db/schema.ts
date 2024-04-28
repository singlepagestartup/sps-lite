import { relations } from "drizzle-orm";
import { serial, text, timestamp, integer, pgTable } from "drizzle-orm/pg-core";
import { schema as spsWebsiteBuilderSchema } from "@sps/sps-website-builder-backend-schema";
import { schema as spsWebsiteBuilderSchemaExtended } from "@sps/sps-website-builder-backend-schema-extended";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  text: text("text").notNull(),
  userId: integer("user_id").references(() => users.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const postsRelations = relations(posts, ({ one, many }) => ({}));

export const usersRelations = relations(users, ({ many }) => ({
  comments: many(comments),
}));

export const commentsRelations = relations(comments, ({ one }) => ({
  user: one(users, { fields: [comments.userId], references: [users.id] }),
}));

// page
export const spsWebsiteBuilderPage = spsWebsiteBuilderSchema.page.plain;
export const spsWebsiteBuilderPageRelations =
  spsWebsiteBuilderSchema.page.extended;

// layout
export const spsWebsiteBuilderLayout = spsWebsiteBuilderSchema.layout.plain;
export const spsWebsiteBuilderLayoutRelations =
  spsWebsiteBuilderSchema.layout.extended;

// sps-website-builder
export const spsWebsiteBuilderPagesToLayouts =
  spsWebsiteBuilderSchemaExtended.pagesToLayouts;
export const spsWebsiteBuilderPagesToLayoutsRelations =
  spsWebsiteBuilderSchemaExtended.pagesToLayoutsRelations;
