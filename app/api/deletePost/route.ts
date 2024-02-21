import sql from "@/lib/database";
import { createHash } from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let body = await req.json();

  if (
    req.headers.get("authorization") !==
    "bearer " + process.env.ADMIN_PASSWORD
  ) {
    console.log(
      req.headers.get("authorization"),
      "bearer " + process.env.ADMIN_PASSWORD
    );
    return NextResponse.json({ success: false, error: "invalid ApiKey" });
  }
  // Assuming your table is named "posts" and has a column "id"
  const result = await sql`
    DELETE FROM posts
    WHERE id = ${body.id.id}
  `;

  // Assuming NextResponse is used to send a response back
  return NextResponse.json({ success: true });
}
