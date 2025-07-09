import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRegistrationSchema, insertContactSchema, insertNewsletterSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get('/api/health', (req: Request, res: Response) => {
    res.json({ status: 'ok' });
  });

  // Event registration endpoint
  app.post('/api/register', async (req: Request, res: Response) => {
    try {
      const registrationData = insertRegistrationSchema.parse(req.body);
      const registration = await storage.createRegistration(registrationData);
      res.status(201).json({ success: true, registration });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ success: false, error: error.errors });
      } else {
        console.error('Registration error:', error);
        res.status(500).json({ success: false, error: 'Failed to process registration' });
      }
    }
  });

  // Contact form submission endpoint
  app.post('/api/contact', async (req: Request, res: Response) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.status(201).json({ success: true, contact });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ success: false, error: error.errors });
      } else {
        console.error('Contact form error:', error);
        res.status(500).json({ success: false, error: 'Failed to process contact form' });
      }
    }
  });

  // Newsletter subscription endpoint
  app.post('/api/newsletter', async (req: Request, res: Response) => {
    try {
      const newsletterData = insertNewsletterSchema.parse(req.body);
      const newsletter = await storage.createNewsletter(newsletterData);
      res.status(201).json({ success: true, newsletter });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ success: false, error: error.errors });
      } else {
        console.error('Newsletter error:', error);
        res.status(500).json({ success: false, error: 'Failed to process newsletter subscription' });
      }
    }
  });

  // Return the HTTP server
  const httpServer = createServer(app);
  return httpServer;
}
