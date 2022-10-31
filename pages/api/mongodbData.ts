import { WithId, Document } from "mongodb";
import MongoClient from "../../lib/mongodb";

export default async function handler(
  req: { method: any },
  res: { json: (arg0: { status: number; data: WithId<Document>[] }) => void }
) {
  const client = await MongoClient;
  const db = client.db("nextjs-mongodb-demo");
  switch (req.method) {
    case "GET":
      const allPosts = await db.collection("posts").find({}).toArray();
      res.json({ status: 200, data: allPosts });
      break;
  }
}
