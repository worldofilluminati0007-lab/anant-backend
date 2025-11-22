import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertConsultationSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/consultations", async (req, res) => {
    try {
      const validatedData = insertConsultationSchema.parse(req.body);
      const consultation = await storage.createConsultation(validatedData);
      res.json({ success: true, consultation });
    } catch (error: any) {
      res.status(400).json({ 
        success: false, 
        error: error.errors || error.message 
      });
    }
  });

  app.get("/api/consultations", async (_req, res) => {
    try {
      const consultations = await storage.getAllConsultations();
      res.json({ success: true, consultations });
    } catch (error: any) {
      res.status(500).json({ 
        success: false, 
        error: error.message 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
