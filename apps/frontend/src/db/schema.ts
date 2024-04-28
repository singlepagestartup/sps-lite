import { relations } from "drizzle-orm";
import { serial, text, timestamp, integer, pgTable } from "drizzle-orm/pg-core";
import { schema as spsWebsiteBuilderSchema } from "@sps/sps-website-builder-backend-schema";

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
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const postsRelations = relations(posts, ({ one, many }) => ({}));

export const usersRelations = relations(users, ({ many }) => ({}));

export const commentsRelations = relations(comments, ({ one }) => ({}));

export const spsWebsiteBuilderPage = spsWebsiteBuilderSchema.plain;
export const spsWebsiteBuilderPageRelations = spsWebsiteBuilderSchema.extended;
