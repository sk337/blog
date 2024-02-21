import sql from "@/lib/database";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let body = await req.json();

  if (
    req.headers.get("authorization") !==
    "bearer " + process.env.ADMIN_PASSWORD
  ) {
    return NextResponse.json({ success: false, error: "invalid ApiKey" });
  }

  if (typeof body.title !== "string" || typeof body.content !== "string") {
    return NextResponse.json({ success: false, error: "Invalid input" });
  }

  const query =
    await sql`INSERT INTO posts (title, content) VALUES (${body.title}, ${body.content})`;

  return NextResponse.json({ success: true, id: query[0].id });
}
