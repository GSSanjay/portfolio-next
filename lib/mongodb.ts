import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;

let mongoDBClient: Promise<MongoClient>;

mongoDBClient = new MongoClient(uri).connect();

export default mongoDBClient;
