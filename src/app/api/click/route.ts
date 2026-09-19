import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  const { id } = await request.json();

  if (typeof id !== "string" || !id) {
    return Response.json({ error: "Invalid id" }, { status: 400 });
  }

  const client = await clientPromise;
  const collection = client.db().collection<{ _id: string; count: number }>(
    "linkClicks",
  );

  const result = await collection.findOneAndUpdate(
    { _id: id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" },
  );

  return Response.json({ count: result?.count ?? 1 });
}
