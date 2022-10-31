import { MongoClient, MongoClientOptions } from "mongodb";

const uri = process.env.MONGODB_URI!;

let mongoDBClient: Promise<MongoClient>;
// let clientPromise;

mongoDBClient = new MongoClient(uri).connect();
// clientPromise = client.connect();

export default mongoDBClient;
