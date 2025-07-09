import { 
  users, type User, type InsertUser,
  registrations, type Registration, type InsertRegistration,
  contacts, type Contact, type InsertContact,
  newsletters, type Newsletter, type InsertNewsletter 
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Registration methods
  createRegistration(registration: InsertRegistration): Promise<Registration>;
  getRegistrations(): Promise<Registration[]>;
  
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  // Newsletter methods
  createNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
  getNewsletters(): Promise<Newsletter[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private registrations: Map<number, Registration>;
  private contacts: Map<number, Contact>;
  private newsletters: Map<number, Newsletter>;
  private userId: number;
  private registrationId: number;
  private contactId: number;
  private newsletterId: number;

  constructor() {
    this.users = new Map();
    this.registrations = new Map();
    this.contacts = new Map();
    this.newsletters = new Map();
    this.userId = 1;
    this.registrationId = 1;
    this.contactId = 1;
    this.newsletterId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Registration methods
  async createRegistration(insertRegistration: InsertRegistration): Promise<Registration> {
    const id = this.registrationId++;
    const createdAt = new Date();
    // Ensure events is always an array or null, not undefined
    const events = insertRegistration.events === undefined ? [] : insertRegistration.events;
    const registration: Registration = { ...insertRegistration, events, id, createdAt };
    this.registrations.set(id, registration);
    return registration;
  }
  
  async getRegistrations(): Promise<Registration[]> {
    return Array.from(this.registrations.values());
  }
  
  // Contact methods
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactId++;
    const createdAt = new Date();
    // Ensure subject is always a string or null, not undefined
    const subject = insertContact.subject === undefined ? null : insertContact.subject;
    const contact: Contact = { ...insertContact, subject, id, createdAt };
    this.contacts.set(id, contact);
    return contact;
  }
  
  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }
  
  // Newsletter methods
  async createNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const id = this.newsletterId++;
    const createdAt = new Date();
    const newsletter: Newsletter = { ...insertNewsletter, id, createdAt };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }
  
  async getNewsletters(): Promise<Newsletter[]> {
    return Array.from(this.newsletters.values());
  }
}

export const storage = new MemStorage();
