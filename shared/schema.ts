import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const consultations = pgTable("consultations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  patientName: text("patient_name").notNull(),
  contactNumber: text("contact_number").notNull(),
  email: text("email").notNull(),
  preferredTime: text("preferred_time").notNull(),
  healthConcern: text("health_concern").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertConsultationSchema = createInsertSchema(consultations).omit({
  id: true,
  createdAt: true,
}).extend({
  patientName: z.string().min(2, "Name must be at least 2 characters"),
  contactNumber: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),
  email: z.string().email("Please enter a valid email address"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  healthConcern: z.string().min(10, "Please describe your health concern (minimum 10 characters)"),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertConsultation = z.infer<typeof insertConsultationSchema>;
export type Consultation = typeof consultations.$inferSelect;
