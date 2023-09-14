// src/db.ts
import { MongoClient, Db } from 'mongodb';

let client: MongoClient;
let db: Db;

export async function connectToDatabase() {
  if (!client) {
    client = new MongoClient('mongodb://127.0.0.1:27017', {
      connectTimeoutMS: 3000, // Adjust this as needed
    });
    await client.connect();
    db = client.db('bookstore');
  } 
  return db;
}