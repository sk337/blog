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

  if (
    typeof body.title !== "string" ||
    typeof body.content !== "string" ||
    typeof body.id !== "number"
  ) {
    return NextResponse.json({ success: false, error: "Invalid input" });
  }

  const query =
    await sql`UPDATE posts SET title = ${body.title}, content = ${body.content} WHERE id = ${body.id}`;
  return NextResponse.json({ success: true });
}
