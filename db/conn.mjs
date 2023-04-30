import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";

console.log(`connectionString is ${connectionString}`)

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}

let db = conn.db("design-db");

export default db;