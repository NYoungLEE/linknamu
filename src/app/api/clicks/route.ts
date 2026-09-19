import clientPromise from "@/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const collection = client.db().collection<{ _id: string; count: number }>(
    "linkClicks",
  );

  const docs = await collection.find().toArray();
  const counts = Object.fromEntries(docs.map((doc) => [doc._id, doc.count]));

  return Response.json(counts);
}
