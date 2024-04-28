import { relations } from "drizzle-orm";
import { serial, text, timestamp, integer, pgTable } from "drizzle-orm/pg-core";
import { schema as spsWebsiteBuilderSchema } from "@sps/sps-website-builder-backend-schema";
import { Tables as SpsWebsiteBuilderSchemaExtendedTables } from "@sps/sps-website-builder-backend-schema-extended";

export const UserTable = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const PostTable = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const CommentTable = pgTable("comments", {
  id: serial("id").primaryKey(),
  text: text("text").notNull(),
  userId: integer("user_id").references(() => UserTable.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const PostRelationTable = relations(PostTable, ({ one, many }) => ({}));

export const UserRelationTable = relations(UserTable, ({ many }) => ({
  Comments: many(CommentTable),
}));

export const CommentRelationTable = relations(CommentTable, ({ one }) => ({
  user: one(UserTable, {
    fields: [CommentTable.userId],
    references: [UserTable.id],
  }),
}));

// page
export const SpsWebsiteBuilderPage = spsWebsiteBuilderSchema.Page.Plain;
export const SpsWebsiteBuilderPageRelations =
  spsWebsiteBuilderSchema.Page.Relations;

// layout
export const SpsWebsiteBuilderLayout = spsWebsiteBuilderSchema.Layout.Plain;
export const SpsWebsiteBuilderLayoutRelations =
  spsWebsiteBuilderSchema.Layout.Relations;

// sps-website-builder
export const SpsWebsiteBuilderPageToLayoutTable =
  SpsWebsiteBuilderSchemaExtendedTables.PageToLayoutTable;
export const SpsWebsiteBuilderPageToLayoutRelationTable =
  SpsWebsiteBuilderSchemaExtendedTables.PageToLayoutRelationTable;
