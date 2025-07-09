import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Simple in-memory storage for demo
let contacts = [];
let registrations = [];
let newsletters = [];
let idCounter = 1;

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/contact', (req, res) => {
  const contact = {
    id: idCounter++,
    ...req.body,
    createdAt: new Date().toISOString()
  };
  contacts.push(contact);
  res.json(contact);
});

app.post('/api/register', (req, res) => {
  const registration = {
    id: idCounter++,
    ...req.body,
    createdAt: new Date().toISOString()
  };
  registrations.push(registration);
  res.json(registration);
});

app.post('/api/newsletter', (req, res) => {
  const newsletter = {
    id: idCounter++,
    ...req.body,
    createdAt: new Date().toISOString()
  };
  newsletters.push(newsletter);
  res.json(newsletter);
});

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, "../dist/public")));

// Handle client-side routing - serve index.html for all non-API routes
app.get("*", (req, res) => {
  if (!req.path.startsWith("/api")) {
    res.sendFile(path.join(__dirname, "../dist/public/index.html"));
  }
});

export default app;
